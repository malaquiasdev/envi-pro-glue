function createVacantSchema({ Schema }) {
  return new Schema(
    {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String
      },
      link: {
        type: String
      },
      eventDate: {
        type: String
      },
      uf: {
        type: String
      }
    },
    {
      timestamps: true
    }
  );
}

module.exports = createVacantSchema;
