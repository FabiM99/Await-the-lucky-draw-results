function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));
  
        process.nextTick(() => {
            win ? resolve(`${player} won a prize in the draw!`) : reject(new Error(`${player} lost the draw.`));
        });
    });
}


async function result(){
    try {
        console.log(await luckyDraw("Tina"));
    } catch (error) {
        console.error(error);
    }

    try {
        console.log(await luckyDraw("Jorge"));
    } catch (error) {
        console.error(error);
    }

    try {
        console.log(await luckyDraw("Julien"));
    } catch (error) {
        console.error(error);
    }
}

result();

