import {Storage} from 'aws-amplify';

export const s3Upload = async file => {
      const filename = `${Date.now()}-${file.name}`;
      const { key } = await Storage.vault.put(filename, file, {
            contentType: file.type
      });
      return key;
};

export const s3Delete = async filename => {
      await Storage.vault.remove(filename);
};