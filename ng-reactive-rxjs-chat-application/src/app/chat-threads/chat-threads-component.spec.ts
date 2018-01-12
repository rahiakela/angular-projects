import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadsComponentComponent } from './chat-threads-component.component';

describe('ChatThreadsComponentComponent', () => {
  let component: ChatThreadsComponentComponent;
  let fixture: ComponentFixture<ChatThreadsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
