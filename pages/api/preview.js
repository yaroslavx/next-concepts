export default function handler(req, res) {
  res.setPreviewData({ user: 'SomeRandomUser' });
  res.redirect(req.query.redirect);
}
