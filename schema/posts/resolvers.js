/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import models from '../../models/sql';

// Get thoughts by ID
export const getById = async (parentValue, { id }) => await models.Post.findOne({ where: { id } });

// Get all thoughts
export const getAll = async () => await models.Post.findAll({ order: [['createdAt', 'DESC']] });

// Create thought
export const create = async (parentValue, { name, thought }) => await models.Post.create({ name, thought });

// Delete thought
export const remove = async (parentValue, { id }) => await models.Post.destroy({ where: { id } });
