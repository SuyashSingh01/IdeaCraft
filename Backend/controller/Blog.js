const Blog = require('../models/Blog');
const User = require('./models/User');

// Save blog endpoint
exports.saveBlogs = async (req, res) => {
    const { userId, blogId } = req.body;

    try {
        // Check if the blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        // Update user's savedBlogs
        await User.findByIdAndUpdate(
            userId,
            { $addToSet: { savedBlogs: blogId } }, // Add blogId without duplication
            { new: true }
        );

        res.status(200).json({ message: 'Blog saved successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}

exports.getsaveBlogs = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId).populate('savedBlogs');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ savedBlogs: user.savedBlogs });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}
exports.getRecommendBlogs = async (userId) => {
    try {
        const user = await User.findById(userId).populate({
            path: 'savedBlogs',
            populate: { path: 'category', model: 'Category' },
        });

        if (!user) throw new Error('User not found');

        // Extract unique category IDs from saved blogs
        const savedCategories = [
            ...new Set(user.savedBlogs.map((blog) => blog.category?._id.toString())),
        ];

        // Find blogs in these categories, excluding already saved ones
        const recommendations = await Blog.find({
            category: { $in: savedCategories },
            _id: { $nin: user.savedBlogs.map((blog) => blog._id) }, // Exclude already saved blogs
            visibility: 'Public', // Optional: Exclude private blogs
        }).populate('category'); // Optionally populate categories in recommendations

        return res.status(200).json({
            recommendations: recommendations,
            success: true,
            message: 'Recommended blogs fetched successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(res.statusCode).json({
            message: 'Failed to fetch recommended blogs',
            error: error.message,
            success: false,
        });
    }
};

exports.updateblog = async (req, res) => {
    const { id, body, tittle, visibility } = req.body;
    try {

        const
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while Signing Up",
            error: err.message
        })
    }
}
exports.deleteblog = async (req, res) => {
    const { id } = req.body;
    try {


        const

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something Went Wrong while Deleting Up",
            error: err.message
        })
    }
}