import React from "react";
import Article from "./Article"; // Import the Article component

function ArticleList({posts}) {
    const articleList = posts.map((article) => {
        return (
            <Article 
                key={article.id}
                title={article.title}
                date={article.date}
                preview={article.preview}
                minutes={article.minutes} // Pass the minutes prop
            />
        );
    });

    return (
        <main>
            {articleList}
        </main>
    );
}

export default ArticleList;
