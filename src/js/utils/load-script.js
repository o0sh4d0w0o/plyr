export default function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.onload = () => {
      script.onload = null;
      script.remove();
      resolve();
    };

    script.onerror = () => {
      script.onerror = null;
      script.remove();
      reject();
    };

    script.src = url;

    document.head.appendChild(script);
  });
}
