// 🌟 깃허브 서버에서 사진을 못 찾으면 고화질 글로벌 이미지로 우회시키는 자동 튠업 배선
document.addEventListener("DOMContentLoaded", function() {
  const images = {
    "img-bulgogi": "https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?q=80&w=600&auto=format&fit=crop",
    "img-japchae": "https://images.unsplash.com/photo-1580958219570-e31b09313a7c?q=80&w=600&auto=format&fit=crop",
    "img-jeyuk": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop",
    "img-gochujang": "https://images.unsplash.com/photo-1585938338392-50a59999354e?q=80&w=600&auto=format&fit=crop",
    "img-kimchi": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=600&auto=format&fit=crop",
    "img-stew": "https://images.unsplash.com/photo-1547928576-a4a33237eceb?q=80&w=600&auto=format&fit=crop"
  };

  for (let id in images) {
    const imgEl = document.getElementById(id);
    if (imgEl) {
      // 로컬 파일 검사 후 안 나오면 즉시 고화질 라이브 이미지 주소로 납땜
      imgEl.onerror = function() {
        this.src = images[id];
        this.onerror = null;
      };
      // 초기 구동 신호
      if (imgEl.complete && imgEl.naturalWidth === 0) {
        imgEl.src = images[id];
      }
    }
  }
});