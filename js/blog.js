$(function() {

	Parse.$ = jQuery;

	// Replace this line with the one on your Quickstart Guide Page
 Parse.initialize("lM5eaAzMJNSD6AItaGA5PQcqe71JgZ50b24bBBk2", "PmNmGJhEewpSj2oDH1Zd2udOVBaIBfdBFtqwLfJ8");

	var Blog = Parse.Object.extend("Blog"),
		Blogs = Parse.Collection.extend({
			model: Blog
		}),
		BlogsView = Parse.View.extend({
			template: Handlebars.compile($('#blogs-tpl').html()),
			render: function() { 
				var collection = { blog: this.collection.toJSON() };
				this.$el.html(this.template(collection));
			}
		});
		blogs = new Blogs();

		blogs.fetch({
			success: function(blogs) {
				var blogsView = new BlogsView({ collection: blogs });
				blogsView.render();
				$('.main-container').html(blogsView.el);
			},
			error: function(blogs, error) {
				console.log(error);
			}
		});

});
