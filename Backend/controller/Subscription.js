const User=require('../models/User');


// Subscribe to an author
 exports.subscribe=async (req, res) => {
    const userId = req.user._id;
    // Assuming req.user is the authenticated user
    const authorId = req.params.authorId;

    try {
        
        const user = await User.findById(userId);
        const author = await User.findById(authorId);

        if (!author) return res.status(404).json({ message: 'Author not found' });
        
        // Update subscription lists
        if (!user.subscriptions.includes(authorId)) {
            user.subscriptions.push(authorId);
            author.subscribers.push(userId);
        }

        await user.save();
        await author.save();

        res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Unsubscribe from an author
exports.unsubscribe= async (req, res) => {
    const userId = req.user._id;
    const authorId = req.params.authorId;

    try {
        const user = await User.findById(userId);
        const author = await User.findById(authorId);

        if (!author) return res.status(404).json({ message: 'Author not found' });

        // Remove from subscription lists
        user.subscriptions = user.subscriptions.filter(id => id.toString() !== authorId);
        author.subscribers = author.subscribers.filter(id => id.toString() !== userId);

        await user.save();
        await author.save();

        res.status(200).json({ message: 'Unsubscribed successfully' });
    } catch (error) {
        res.status(500).json({ error });
    }
};


