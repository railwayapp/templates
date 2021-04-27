import { model, Schema, Document } from "mongoose";

interface ICountry extends Document {
  name: string;
  iso2code: string;
}

const CountrySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  iso2code: {
    type: String,
  },
});

const CountryModel = model<ICountry>("Country", CountrySchema);

export { CountryModel, ICountry };
