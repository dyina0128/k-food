// 🌟 이미지가 깨지면 전 세계 누구나 볼 수 있는 고화질 대체 이미지로 직결하는 안전장치 배선
function handleImgError(img, type) {
  const fallbacks = {
    bulgogi: "https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?q=80&w=600&auto=format&fit=crop",
    japchae: "https://images.unsplash.com/photo-1580958219570-e31b09313a7c?q=80&w=600&auto=format&fit=crop",
    jeyuk: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop",
    gochujang: "https://images.unsplash.com/photo-1614357321204-749c9586144e?q=80&w=600&auto=format&fit=crop",
    kimchijigae: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=600&auto=format&fit=crop",
    tteokbokki: "https://images.unsplash.com/photo-1616738326441-1185493ff683?q=80&w=600&auto=format&fit=crop",
    eomuk: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop"
  };
  img.src = fallbacks[type] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop";
  img.onerror = null; // 무한 루프 방지 스위치 끄기
}

document.addEventListener("DOMContentLoaded", function() {
  const detailBox = document.getElementById("detailBox");
  const detailContent = document.getElementById("detailContent");

  // 상세 보기 인터랙션 엔진
  const allButtons = document.querySelectorAll(".viewBtn");
  allButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      const card = button.closest(".card");
      if (!card || !detailContent || !detailBox) return;

      e.preventDefault();
      const title = card.querySelector("h3") ? card.querySelector("h3").innerText : "K-Food Recipe";
      const desc = card.querySelector("p") ? card.querySelector("p").innerText : "Premium Culinary Guide";

      detailContent.innerHTML = `
        <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="font-family: 'Georgia', serif; color: #111827; margin:0;">${title}</h2>
            <p style="color: #4b5563; line-height: 1.6; margin: 10px 0 0 0;">${desc}</p>
        </div>

        <!-- 🛒 아마존 파트너스 마진 확보 박스 -->
        <div style="background: #fffbeb; border: 2px dashed #f59e0b; padding: 20px; border-radius: 12px; margin: 25px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <div>
                <h4 style="margin:0 0 5px 0; color: #b45309; font-weight: bold;">🛒 Recommendation for Best Flavor:</h4>
                <p style="margin:0; font-weight: 600; color: #1f2937;">Premium Authentic Seasoning Ingredients Matched From Amazon</p>
            </div>
            <a href="https://amzn.to/3Go1267" target="_blank" style="background: #ff9900; color: #111827; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 0.95rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">Shop Best Price on Amazon →</a>
        </div>

        <!-- 🌟 구글 애드센스 인아티클 광고 배선 -->
        <div style="background:#f8fafc; padding:12px; text-align:center; color:#94a3b8; font-size:0.8rem; margin:20px 0; border-radius:6px; font-weight:bold; border: 1px solid #e2e8f0;">
            ADVERTISEMENT <br> (In-Article Responsive Ad Space)
        </div>

        <h3 style="font-family: 'Georgia', serif; color: #111827; margin-bottom: 15px;">🍳 Quick Master Cooking Guide</h3>
        <p style="color: #334155; line-height: 1.6;">Follow our premium visual directions to master this dynamic dish at home using proper traditional methods.</p>
      `;
      detailBox.style.display = "block";
      detailBox.scrollIntoView({ behavior: "smooth" });
    });
  });
});