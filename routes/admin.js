const express = require('express');
const router = express.Router();
const { signup, signin, signout, requireSignin, getAllUser, getOneUserWallet, updateOneWallet, getOneWallet, getOnePlayer, getWallets, wallets, updateUser } = require('../controllers/admin');
const { userList, readUser } = require('../controllers/auth');
//const { userList, readUser } = require('../controllers/auth');
// validators
const { runValidation } = require('../validators');
const { adminSignupValidator, adminSigninValidator } = require('../validators/auth');
router.post('/admin/signup', adminSignupValidator, runValidation, signup);
router.post('/admin/signin', adminSigninValidator, runValidation, signin);
router.get('/admin/signout', signout);


router.get('/admin/getAllUser', requireSignin, getAllUser);
router.get('/admin/getUser/:slug', requireSignin, getOnePlayer);
router.put('/admin/updateUser/:slug', requireSignin, updateUser);

router.post('/admin/wallet', requireSignin, wallets)
router.get('/admin/getWallets', requireSignin, getWallets)
router.get('/admin/wallet/getOne/:slug', requireSignin, getOneWallet)
router.get('/admin/wallet/getOne/user/:slug', requireSignin, getOneUserWallet)
router.put('/admin/wallet/updateOne/:slug', requireSignin, updateOneWallet)


// test
// router.get('/secret', requireSignin, (req, res) => {
//     res.json({
//         user: req.user
//     });
// });

module.exports = router;
