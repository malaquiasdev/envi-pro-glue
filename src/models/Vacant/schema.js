function createVacantSchema({ Schema }) {
  return new Schema(
    {
      id: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      result: {
        type: Array,
        schema: [
          {
            type: Object,
            schema: {
              title: String,
              link: String,
              eventDate: String,
              uf: String
            }
          }
        ]
      }
    },
    {
      timestamps: true
    }
  );
}

module.exports = createVacantSchema;
