/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import models from '../../models/sql';

// Get thoughts by ID
export const getById = async (parentValue, { id }) => await models.Post.findOne({ where: { post_id } });

// Get all thoughts
export const getAll = async () => await models.Post.findAll({ order: [['createdAt', 'DESC']] });

// Create thought
// eslint-disable-next-line camelcase
export const create = async (parentValue, { post_id, post_title, post }) => await models.Post.create({ post_id, post_title, post });

// Delete thought
export const remove = async (parentValue, { id }) => await models.Post.destroy({ where: { post_id } });
