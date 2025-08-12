//Interface Simulation with Symbols
class StorageProvider {
    uploadFile(file) {
        throw new Error("Should be implemented")
    }

    download(filename) {
        throw new Error("Should be implemented")
    }
}

class LocalStorageProvider extends StorageProvider {
    upload(file) {
        console.log(`Uploading ${file} to local storage...`);
      }

      download(filename) {
        console.log(`Downloading ${filename} from local storage...`);
    }
}      

class CloudStorageProvider extends StorageProvider {
    upload(file) {
        console.log(`Uploading ${file} to cloud storage...`);
      }

    download(filename) {
        console.log(`Downloading ${filename} from cloud storage...`);
    }
}

function useStorage(provider) {
    if(typeof provider.upload !== 'function') {
        throw new Error("Provider must be implement upload method");
    }

    if(typeof provider.download !== 'function') {
        throw new Error("Provider must be implement download method");
    }

    provider.upload("file.txt");
    provider.download("file.txt")
}

const local = new LocalStorageProvider();
const cloud = new CloudStorageProvider();

useStorage(local);
useStorage(cloud);