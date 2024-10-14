const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items:{ type: mongoose.Schema.Types.ObjectId, ref: 'catigory', required: true },
      
    
      });
  
  const Cart = mongoose.model('Cart', cartSchema);