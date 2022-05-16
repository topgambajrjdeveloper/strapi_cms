module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40f476a0c2167aebc94cfb51a94a49db'),
  },
});
