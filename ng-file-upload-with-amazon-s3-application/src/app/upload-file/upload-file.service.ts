import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk";
import * as S3 from "aws-sdk/clients/s3";

@Injectable()
export class UploadFileService {

  FOLDER = 'jsa-s3/';

  constructor() { }

  uploadfile(file: any) {

    const bucket = new S3({
      accessKeyId: 'AKIAJJJ7FYNWI5ETFNNA',
      secretAccessKey: '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',
      region: 'us-east-1'
    });

    const params = {
      Bucket: 'rakela-angular-bucket',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, (err, data) => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
    
  }
}
