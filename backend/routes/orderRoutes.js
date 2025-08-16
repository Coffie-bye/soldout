router.post("/", auth, async (req, res) => {
  try {
    const order = new Order({
      user: req.user.id,
      items: req.body.items,
      address: req.body.address,
      total: req.body.total,
      paymentMethod: req.body.paymentMethod,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
