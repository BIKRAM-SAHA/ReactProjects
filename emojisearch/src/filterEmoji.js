import emojis from './emojis.json'

export const filterEmoji=(searchText, max)=>{
    return emojis.filter((emoji)=>{
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase()))
        return true
        else if(emoji.keywords.includes(searchText.toLowerCase()))
        return true
        else return false
    }).slice(0,max)

}