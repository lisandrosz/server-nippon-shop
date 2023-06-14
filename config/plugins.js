module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIA5QBZ6KBSDD3TWPMR",
        secretAccessKey: "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",
        region: "sa-east-1",
        params: {
          Bucket: "nippon-shop",
        },
      },
    },
  },
});
