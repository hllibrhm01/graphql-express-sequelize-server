import { BlogPost } from '../../sql/post/postModel';

export const main = {
  getPosts: (args, req) => BlogPost.findAll().then((data) => data),
  getPostInfo: (args, req) => BlogPost.findAll({ where: { post_id: [args.post_id] } }).then((data) => data[0]),
  // updatePostInfo: (args, req) => BlogPost.update({ id: [args.id], name: args.name, email: args.email, job_title: args.job_title }, { where: { id: [args.id] }}).then(data => data),
  // createPost: (args, req) => BlogPost.create({ id: args.id, name: args.name, email: args.email, job_title: args.job_title }).then(data => data),
  // deletePost: (args, req) => BlogPost.destroy({ where: { id: [args.id] }}).then(data => data)
};
