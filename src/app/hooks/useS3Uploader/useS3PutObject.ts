import {
  PutObjectCommand,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';
import { useState } from 'react';

const s3 = new S3Client({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: 'AKIAY4WDXGS5DS5VMZGW',
    secretAccessKey: 'AVNWVDve5W0PTJh4eINtH3iYnQddme7I+fgPsfvU',
  },
});

export const getFileExtension = (file: File) =>
  file.type.includes('image')
    ? file.type.replace('image/', '')
    : file.type.replace('video/', '');

export const useS3PutObject = () => {
  const [fetching, setFetching] = useState(false);
  const upload = async (files: File[]): Promise<PutObjectCommandOutput[]> => {
    setFetching(true);
    return Promise.all(
      files.map((file) =>
        s3.send(
          new PutObjectCommand({
            Body: file,
            Key: `videos/${file.name}.${getFileExtension(file)}`,
            Bucket: 'editeasebucket',
          }),
        ),
      ),
    ).then((data) => {
      console.log('finished to upload files');
      setFetching(false);
      return data
    });
  };

  return { upload, fetching };
};
