import axios from "axios";

class MyUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    const formData = new FormData();
    return new Promise((resolve) => {
      this.loader.file
        .then((loadFile) => {
          formData.append("file-to-upload", loadFile);
          return axios.post(
            `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/upload`,
            formData,
            {
              headers: {
                "Content-type": "multipart/form-data",
              },
            }
          );
        })
        .then((response) => {
          resolve({
            default: response.data.imageUrl,
          });
        });
    });
  }
}

export default MyUploadAdapter;
