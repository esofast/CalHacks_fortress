const { create } = require('ipfs-http-client');

const ipfs = create({ 
    host: "ipfs.infura.io", 
    port: "5001", 
    protocol: "https" 
});

export const addToFundraiser = async(fundFile, currFundraisers) => {
    let newFundraisers = currFundraisers.push(fundFile);
    let allFundsFile ={
        path: "/allFunds.txt",
        content: newFundraisers
    }
   await ipfs.add(allFundsFile);
}
export const getAllFundraisers = async() => {
    let data
    for await (const buf of ipfs.get('/allFunds.txt')) {
        data = buf;
    }
    return data;
}
export const addFundraiserInfo = async(fileName, goal, tile, summary) => {
    let document = {goal:goal, title:title, summary:summary};
    let content = JSON.stringify(document);
    let file = {
        path: fileName,
        content: content
    };
    result = await ipfs.add(file)
    console.log(result)
}
export const getFundraiserInfo = async(fileName) => {
    let data
    for await (const buf of ipfs.get(fileName)) {
        data = buf;
    }
    return data;
}