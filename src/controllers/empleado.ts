import { Request, Response } from 'express';
import Empleado from '../models/empleado';
import bcrypt from 'bcrypt';

// Obtener todos los empleados
export const getEmpleados = async (req: Request, res: Response) => {
    try {
        const listEmpleados = await Empleado.findAll();
        res.json(listEmpleados);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener los empleados'
        });
    }
};

// Obtener un empleado por ID
export const getEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findByPk(id);

        if (empleado) {
            res.json(empleado);
        } else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al obtener el empleado'
        });
    }
};

// Eliminar un empleado por ID
export const deleteEmpleado = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findByPk(id);

        if (empleado) {
            await empleado.destroy();
            res.json({
                msg: `El empleado con el id: ${id} fue eliminado exitosamente`
            });
        } else {
            res.status(404).json({
                msg: `No existe un empleado con el id: ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al eliminar el empleado'
        });
    }
};

// Guardar un nuevo empleado
export const saveEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
        /*
        // Validamos si el usuario ya existe en la base de datos
        const empleado = await empleado.findOne({ where: { id: id } });
        
        if (empleado) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el nombre ${username}`
            });
        } */

    try {
        await Empleado.create(body);
        res.json({
            msg: 'El empleado fue agregado con éxito',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al agregar empleado'
        });
    }
};





export const updateEmpleado = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        // Encuentra el empleado por id
        const empleado = await Empleado.findByPk(id);

        if (empleado) {
            // Actualiza el empleado con los datos del cuerpo de la solicitud
            await empleado.update(body);
            res.json({
                msg: `El empleado con el id: ${id} fue actualizado exitosamente`
            });
        } else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error al actualizar empleado'
        });
    }
};






export const userlogin = (req: Request, res: Response) => {
    console.log(req.body);
  
    res.json({
      msg: 'Login User',
      body: req.body
    });
}
