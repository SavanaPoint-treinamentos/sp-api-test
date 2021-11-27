import { Product } from '../models/Product';


export const index = async (_, res) => {
   try {
    const produ = await Product.find();
    
    return res.json(produ)
   } catch (error) {
     return res.json(error)  
   }
}

export const create = async (req, res) => {
    const { name, imageURL, price, description } = req.body;

  try {
    const products = new Product({
        name, imageURL, price, description
    })
    const response  = await products.save();

    return await res.json(response)
  } catch (error) {
     return res.json(error) 
  }
}

export const getOne = async (req, res) => {
    const { _id } = req.params;

    try {
        const product = await Product.findOne({_id});

    return res.json(product);
    } catch (error) {
        return res.json(error)
    }
}

export const update = async(req, res) => {
    const { _id } = req.params;
    const { name, imageURL, price, description } = req.body;
    
    try {
        const response = await Product.updateOne({_id}, {
            name, imageURL, price, description
        });
    
        return res.json(response);
    } catch (error) {
       return  res.json(error) 
    }
}

export const delProduct = async(req, res) => {
    const { _id } = req.params;

   try {
    const response = await Product.deleteOne({_id});
    return res.json({success_msg: 'deleted'})
   } catch (error) {
       
   }
}

