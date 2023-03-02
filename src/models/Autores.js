import mongoose from "mongoose";

const autoresSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
},
{
    versionKey: false
}
);
                            //nome q vai criar lá
const Autores = mongoose.model("autores", autoresSchema);

export default Autores;