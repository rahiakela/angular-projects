import { Injectable, NgZone } from '@angular/core';
import { Subject } from "rxjs/Subject";

// TypeScript declaration for annyang
declare var annyang: any;

@Injectable()
export class SpeechService {

  words$ = new Subject<{[key: string]: string}>();
  errors$ = new Subject<{[key: string]: any}>();
  listening = false;

  constructor(private zone: NgZone) { }

  get speechSupported(): boolean {
    return !! annyang;
  }

  init() {
    const commands = {
      'noun: noun': (noun) => {
        this.zone.run(() => {
          this.words$.next({type: 'noun', 'word': noun});
        });
      },
      'verb: verb': (verb) => {
        this.zone.run(()=> {
          this.words$.next({type: 'verb', 'word': verb});
        });
      },
      'adjective :adj': (adj) => {
        this.zone.run(() => {
          this.words$.next({type: 'adj', 'word': adj});
        });
      }
    };

    annyang.addCommands(commands);

    // Log anything the user says and what speech recognition thinks it might be
    // annyang.addCallback('result', (userSaid) => {
    //   console.log('User may have said:', userSaid);
    // });
    annyang.addCallback('errorNetwork', (err) => {
      this.handleError('network', 'A network error occurred.', err);
    });
    annyang.addCallback('errorPermissionBlocked', (err) => {
      this.handleError('blocked', 'Browser blocked microphone permissions.', err);
    })

    annyang.addCallback('errorPermissionDenied', (err)=> {
      this.handleError('denied', 'User denied microphone permissions.', err);
    });
    annyang.addCallback('resultNoMatch', (userSaid) => {
      this.handleError('no match', 'Spoken command not recognized. Say "noun [word]", "verb [word]", OR "adjective [word]".', {results: userSaid});
    });

  }

  private handleError(error, msg, errorObj) {
    this.zone.run(() => {
      this.errors$.next({
        error: error,
        message: msg,
        obj: errorObj
      });
    });
  }

  startListening() {
    annyang.start();
    this.listening = true;
  }

  abort() {
    annyang.abort();
    this.listening = false;
  }
}
