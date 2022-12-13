
const Org = require("../models/orgsModels")

// por um if para caso de cadastro q não existe ou igual

const cadastrarOrg = async(req, res) => {
   
    const {nome, tema, descricao, telefone, site} = req.body;
    try{
    const novaOrg = new Org({
    nome, 
    tema, 
    descricao, 
    telefone, 
    site
    })

    const salvarOrg = await novaOrg.save();
    res.status(201).json({
        Organizacao: salvarOrg
    })


}catch(error){
    res.status(400).json({
        messagem: error.message
    })
}
}

const buscarOrg = async (req, res) => {
    const {nome} = req.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');
    try{
        const organizacao = await Org.find(query);
        res.status(200).json(organizacao)
    }catch(error){
        res.status(500).json({
         message: error.message   
        })
    }
}

const atualizarOrgPorId  =  async (req, res) => {
    try { 
        const { nome, tema, descricao, telefone, site } = req.body;

        const org = await Org.findById(req.params.id)
        org.nome = nome || org.nome
        org.tema = tema || org.tema
        org.descricao = descricao || org.descricao
        org.telefone = telefone || org.telefone
        org.site = site || org.site

        const atualizarOrg = await org.save()
        res.status(200).json({ message: "Organização atualidade com sucesso!",
        org})
        
    } catch (error) {
        res.status(500).json({
            message: error.message   
           })
        
    }
}


const deletarOrgPorId = async (req, res) => {
    try {
        const org = await Org.findById(req.params.id) 
        await org.delete()
        res.status(200).json({message: "Organização deletada com sucesso."})

    } catch (error) {
        res.status(500).json({
            message: error.message   
           })
        
    }
}

module.exports  = {
    cadastrarOrg,
    buscarOrg,
    atualizarOrgPorId,
    deletarOrgPorId
}