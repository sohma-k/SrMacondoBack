import {Request, Response} from 'express';
import Producto from '../models/producto'; 
import { Op } from 'sequelize';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts =  await Producto.findAll()
    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }

}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if(product) {
        await product.destroy();
        res.json({
            msg: `El producto con el id: ${id} fue elimidado exitosamente`
        })
    } else {
        
        res.status(404).json({
            msg: `No existe un producto con el id: ${id}`
        })
    }
}

export const saveProduct = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
        await Producto.create(body);


        res.json({
            msg: 'El producto fue agregado con exito',
        })
    } catch (error) {
        console.log(error);
        console.log('Error al agregar producto');
    }

}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    const product = await Producto.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: `El producto con el id: ${id} fue actualizado exitosamente`
        })
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
        try {
            
        } catch (error) {
            console.log(error);
            console.log('Error al actualizar producto');
            
        }
    }
}


// Obtener productos por categoría
export const getProductsByCategory = async (req: Request, res: Response) => {
    // Obtenemos la categoría desde los parámetros de la consulta
    const categoria = req.query.categoria as string;

    if (!categoria) {
        return res.status(400).json({
            msg: 'La categoría es requerida'
        });
    }

    try {
        const products = await Producto.findAll({
            where: {
                categoria: categoria // Utiliza el valor de la categoría para filtrar
            }
        });

        if (products.length > 0) {
            res.json(products);
        } else {
            res.status(404).json({
                msg: `No existen productos en la categoría ${categoria}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al buscar productos por categoría'
        });
    }
};


export const searchProducts = async (req: Request, res: Response) => {
    const { query } = req.query;
    try {
      const listProducts = await Producto.findAll({
        where: {
          name: {
            [Op.like]: `%${query}%`
          }
        }
      });
      res.json(listProducts);
    } catch (error) {
      // Asegura que el error es de tipo 'Error'
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unknown error occurred.');
      }
    }
  };