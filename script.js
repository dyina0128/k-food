// 1. 사장님 사이트의 상세 레시피 데이터 칩셋
const recipeDetails = {
  bulgogi: {
    title: "Classic Korean Beef Bulgogi",
    desc: "Thinly sliced tender beef marinated in a perfectly balanced sweet and savory soy sauce mixture, grilled with sesame oil.",
    amazonText: "Chung Jung One Premium Korean BBQ Bulgogi Marinade Sauce",
    amazonLink: "https://amzn.to/3Bu1245", // 사장님 고유 아마존 링크 자리
    steps: [
      "Slightly pat the beef sirloin or ribeye with a paper towel to remove excess blood.",
      "Mix with fresh sliced onions, carrots, and the premium BBQ bulgogi marinade sauce.",
      "Marinate in the fridge for at least 30 minutes, then stir-fry rapidly over high heat."
    ]
  },
  japchae: {
    title: "Japchae (잡채)",
    desc: "Chewy glass noodles tossed in sweet soy sauce sesame glaze with colorful vegetables like carrots, spinach, wood ear mushroom...",
    amazonText: "Ottogi Premium Korean Sweet Potato Glass Noodles",
    amazonLink: "https://amzn.to/47D4M1A",
    steps: [
      "Boil the sweet potato glass noodles for 6-7 minutes, drain, and rinse in cold water.",
      "Stir-fry julienned carrots, spinach, mushrooms, and onions individually with a pinch of salt.",
      "Toss the noodles and vegetables together with soy sauce, sesame oil, and sugar over low heat."
    ]
  },
  jeyuk: {
    title: "Jeyuk-Bokkeum (제육볶음)",
    desc: "Juicy sliced pork stir-fried in a fiery Gochujang (Korean chili paste) sauce, bursting with garlic, onions, and deep...",
    amazonText: "Chung Jung One Sunchang Traditional Gochujang",
    amazonLink: "https://amzn.to/3Go1267",
    steps: [
      "Slice pork belly or shoulder into bite-sized pieces and prepare fresh vegetables.",
      "Marinate the meat in a rich mixture of Gochujang, Gochugaru, soy sauce, and minced garlic.",
      "Stir-fry on high heat with sliced onions and scallions until caramelized and tender."
    ]
  },
  eomuk: {
    title: "Street-Style Fish Cake Soup (Eomuk-tang)",
    desc: "Warm up your soul with comfort street-style skewered fish cake soups at home.",
    amazonText: "Premium Dried Anchovy & Kelp Soup Base Seafood Packets",
    amazonLink: "https://amzn.to/3Zk1234",
    steps: [
      "Pour 3 cups of water into a pot, add the premium soup base, and bring to a boil.",
      "Cut the fish cakes into bite-sized pieces, add them to the boiling soup, and cook for 3-5 minutes.",
      "Top with chopped green onions and enjoy it hot with Tteokbokki!"
    ]
  }
};

// 2. 사장님이 만들어 두신 HTML 버튼들과 연동하는 스위치 배선
document.addEventListener("DOMContentLoaded", function() {
  // 상세 레시피를 출력할 박스 (기본 하단 구조 활용)
  const detailBox = document.getElementById("detailBox");
  const detailContent = document.getElementById("detailContent");

  // 사장님 사이트 내의 모든 버튼을 탐색해서 타격 배선 깔기
  const allButtons = document.querySelectorAll("button, .viewBtn");
  
  allButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      // 버튼 텍스트나 부모 카드의 글씨를 분석해서 어떤 요리인지 판별하는 시스템
      const cardText = button.parentElement.innerText.toLowerCase();
      let selectedKey = null;

      if (cardText.includes("bulgogi") || cardText.includes("불고기")) selectedKey = "bulgogi";
      else if (cardText.includes("japchae") || cardText.includes("잡채")) selectedKey = "japchae";
      else if (cardText.includes("jeyuk") || cardText.includes("제육")) selectedKey = "jeyuk";
      else if (cardText.includes("fish cake") || cardText.includes("eomuk") || cardText.includes("어묵")) selectedKey = "eomuk";

      if (selectedKey && recipeDetails[selectedKey]) {
        e.preventDefault();
        const data = recipeDetails[selectedKey];

        // 사장님이 만들어 두신 3-Step 레이아웃 스펙 그대로 하단에 주입
        if (detailContent && detailBox) {
          detailContent.innerHTML = `
            <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 15px; margin-bottom: 20px;">
                <h2 style="font-family: 'Georgia', serif; color: #111827; margin:0;">${data.title}</h2>
                <p style="color: #4b5563; line-height: 1.6; margin: 10px 0 0 0;">${data.desc}</p>
            </div>

            <!-- 🛒 아마존 파트너스 수익 창출 다이렉트 패널 -->
            <div style="background: #fffbeb; border: 2px dashed #f59e0b; padding: 20px; border-radius: 12px; margin: 25px 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div>
                    <h4 style="margin:0 0 5px 0; color: #b45309; font-weight: bold;">🛒 Essential Ingredient For Best Taste:</h4>
                    <p style="margin:0; font-weight: 600; color: #1f2937;">${data.amazonText}</p>
                </div>
                <a href="${data.amazonLink}" target="_blank" style="background: #ff9900; color: #111827; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; font-size: 0.95rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">Buy Ingredients on Amazon →</a>
            </div>

            <!-- 🌟 본문 중간 구글 애드센스 광고 자동 진입로 -->
            <div style="background:#f8fafc; padding:12px; text-align:center; color:#94a3b8; font-size:0.8rem; margin:20px 0; border-radius:6px; font-weight:bold; border: 1px solid #e2e8f0;">
                ADVERTISEMENT <br> (In-Article Responsive Ad Area)
            </div>

            <!-- 🍳 사장님 고유 3단계 레시피 디자인 포맷 -->
            <h3 style="font-family: 'Georgia', serif; color: #111827; margin-bottom: 15px;">🍳 How to Cook: 3-Step Recipe</h3>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="display: flex; gap: 15px; align-items: flex-start;">
                    <span style="background: #e11d48; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; flex-shrink: 0;">1</span>
                    <p style="margin:0; color: #334155; line-height: 1.5;"><strong>STEP 1:</strong> ${data.steps[0]}</p>
                </div>
                <div style="display: flex; gap: 15px; align-items: flex-start;">
                    <span style="background: #e11d48; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; flex-shrink: 0;">2</span>
                    <p style="margin:0; color: #334155; line-height: 1.5;"><strong>STEP 2:</strong> ${data.steps[1]}</p>
                </div>
                <div style="display: flex; gap: 15px; align-items: flex-start;">
                    <span style="background: #e11d48; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.85rem; flex-shrink: 0;">3</span>
                    <p style="margin:0; color: #334155; line-height: 1.5;"><strong>STEP 3:</strong> ${data.steps[2]}</p>
                </div>
            </div>
          `;
          detailBox.style.display = "block";
          detailBox.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});