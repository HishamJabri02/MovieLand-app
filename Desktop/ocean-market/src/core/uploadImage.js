const _url = `${import.meta.env.VITE_API_BASE_URL}`;
const _baseImagesUrl = `${_url}/uploads`;
export function uploadImage(imageUrl) {
  return `${_baseImagesUrl}/${imageUrl}`;
}
