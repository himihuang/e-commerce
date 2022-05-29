module.exports = {
  publicPath : process.env.NODE_ENV === "production" ? "/e-commerce/" : "/",
  chainWebpack : config =>{
    config.plugin('html').tap(args => {
      args[0].meta = [
        //----facebook----//
        {
          property: 'og:url',
          content: 'https://himihuang.github.io/e-commerce/#/'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'JJ Accessory'
        },
        {
          property: 'og:image',
          content: 'https://storage.googleapis.com/vue-course-api.appspot.com/himiapi/1651141194324.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FHQwhNEHqThch8%2BskWEManHCi5MlV3GN7Yn01XfxqS6OgsO%2BsVdL%2Bi43heoRcr%2BKXQbTar%2FmI2oaPeF%2BkHmpp4F26wi4%2FqC8F5kPkjEuHi2QxTuHbTsisaFCW04yosTZeK%2FOH9JirC9tOLLGt5ZIsvSN3I6LREPRnFJmKt4tIElif3Nn0YqJF34QA%2F7%2FGz0plx3RRPhXHUtQFR8n9mgG6RlTQIwSxXdHFDHu%2B6g6STPiC%2FLckxdTLa0Hby5IVFUj4fSyKIVzUWPF2d9hvMbBJX6gAbcnAagov%2B8ocmKr9lGzWQsPd2kFcVNtLkR03NgoWp2jq7BEp%2BLZQsGqtwtB7g%3D%3D'
        },
        {
          property: 'og:description',
          content: '提供戒指、項鍊、耳環、手鍊、 飾品配件，透過獨特眼光與最棒的品質帶給每位美美獨一無二的漂亮自我。'
        },
        {
          property: 'og:site_name',
          content: 'JJ Accessory'
        },
        {
          property: 'og:locale',
          content: 'zh_TW'
        },
        {
          property: 'article:author',
          content: 'himi'
        },
        //----twitter----//
        {
          property: 'twitter:card',
          content: '提供戒指、項鍊、耳環、手鍊、 飾品配件的飾品網站'
        },
        {
          property: 'twitter:site',
          content: 'JJ Accessory '
        },
        {
          property: 'twitter:creator',
          content: 'himi'
        },
        {
          property: 'twitter:url',
          content: 'https://himihuang.github.io/e-commerce/#/'
        },
        {
          property: 'twitter:title',
          content: 'JJ Accessory'
        },
        {
          property: 'twitter:description',
          content: '提供戒指、項鍊、耳環、手鍊、 飾品配件，透過獨特眼光與最棒的品質帶給每位美美獨一無二的美麗。'
        },
        {
          property: 'twitter:image',
          content: 'https://storage.googleapis.com/vue-course-api.appspot.com/himiapi/1651141194324.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FHQwhNEHqThch8%2BskWEManHCi5MlV3GN7Yn01XfxqS6OgsO%2BsVdL%2Bi43heoRcr%2BKXQbTar%2FmI2oaPeF%2BkHmpp4F26wi4%2FqC8F5kPkjEuHi2QxTuHbTsisaFCW04yosTZeK%2FOH9JirC9tOLLGt5ZIsvSN3I6LREPRnFJmKt4tIElif3Nn0YqJF34QA%2F7%2FGz0plx3RRPhXHUtQFR8n9mgG6RlTQIwSxXdHFDHu%2B6g6STPiC%2FLckxdTLa0Hby5IVFUj4fSyKIVzUWPF2d9hvMbBJX6gAbcnAagov%2B8ocmKr9lGzWQsPd2kFcVNtLkR03NgoWp2jq7BEp%2BLZQsGqtwtB7g%3D%3D'
        }
      ]
      return args;
      
    })
  } 
};
