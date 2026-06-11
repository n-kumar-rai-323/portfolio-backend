const paginate = (query, page = 1, limit = 10) => {
  const pageNumber = Number(page) || 1;
  const pageSize = Math.min(Number(limit) || 10, 100);
  const skip = (pageNumber - 1) * pageSize;
  return { skip, limit: pageSize, page: pageNumber };
};

module.exports = paginate;
