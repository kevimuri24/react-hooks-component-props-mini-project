import React from "react";
import Emoji from "./Emoji";

function Article({title, date, preview, minutes }){
    const getReadingTime = (minutes) =>{
        let emojiSymbol;
        let emojiCount;
        if(minutes <= 5){
            // Coffee cup emoji for every 5 minutes (rounded up)
            emojiSymbol = "☕️";
            emojiCount = Math.ceil(minutes / 5);
        }else{
            // Bento box emoji for every 10 minutes (rounded up)
            emojiSymbol = "🍱";
            emojiCount = Math.ceil(minutes / 10);
        }
        const emojis = Array(emojiCount).fill(null).map((_, index) => (
            <Emoji key={index} symbol={emojiSymbol} />
        ));

        return (
            <span>
                {emojis} {minutes} min read
            </span>
        );
    };

    return <article>
        <h3>{title}</h3>
        <small>{date} • {getReadingTime(minutes)}</small>
        <p>{preview}</p>
    </article>
}

export default Article;