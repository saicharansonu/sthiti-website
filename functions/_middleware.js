export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // If accessing order.sthiti.online
  if (url.hostname === 'order.sthiti.online') {
    // Rewrite to order.html
    url.pathname = '/order.html';
    return context.env.ASSETS.fetch(url);
  }
  
  // Otherwise continue normally
  return context.next();
}