export function contentSnippet(content){
    return content.split(/\s+/).slice(0,10).join(" ")+"..."
}