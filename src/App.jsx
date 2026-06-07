import { useState } from "react";

const questions = [
  {
    id: 1,
    text: "友達の誕生日サプライズを企画するなら？",
    options: [
      { label: "サプライズ演出を考えてとことんこだわる", value: { H: 2, B: 1 } },
      { label: "みんなが居心地よくなるよう気を配る", value: { B: 2, A: 1 } },
      { label: "参加者の日程調整と連絡を担当する", value: { C: 2, D: 1 } },
      { label: "当日は盛り上げ役に徹する", value: { A: 2, H: 1 } },
    ],
  },
  {
    id: 2,
    text: "カフェでバイトするなら、どの仕事が好き？",
    options: [
      { label: "お客さんに話しかけておすすめを紹介する", value: { B: 2, A: 1 } },
      { label: "レジや在庫管理などお店を回す仕事", value: { C: 2, E: 1 } },
      { label: "SNSや告知ポスターをつくる仕事", value: { D: 2, H: 1 } },
      { label: "清掃や設備チェックでお店を整える仕事", value: { F: 2, G: 1 } },
    ],
  },
  {
    id: 3,
    text: "憧れる仕事のシーンはどれ？",
    options: [
      { label: "結婚式で新郎新婦の笑顔を見る瞬間", value: { H: 2, A: 1 } },
      { label: "おすすめしたドリンクを「おいしい！」と喜ばれる瞬間", value: { B: 2, H: 1 } },
      { label: "数字で成果が出て目標達成する瞬間", value: { D: 2, C: 1 } },
      { label: "問題を解決して「ありがとう」と言われる瞬間", value: { A: 2, F: 1 } },
    ],
  },
  {
    id: 4,
    text: "グループ作業でどんな役割になりがち？",
    options: [
      { label: "アイデアをどんどん出す発案者", value: { H: 2, D: 1 } },
      { label: "全体の進行を管理するまとめ役", value: { C: 2, A: 1 } },
      { label: "細かい作業を丁寧にこなす実務担当", value: { E: 2, F: 1 } },
      { label: "場の空気を読んで全員をフォローする役", value: { B: 2, A: 1 } },
    ],
  },
  {
    id: 5,
    text: "友達と食事に行ったとき、どんな行動をとりがち？",
    options: [
      { label: "メニューを読み込んでみんなにおすすめする", value: { B: 2, E: 1 } },
      { label: "食事よりみんなとの会話が目当て", value: { H: 2, A: 1 } },
      { label: "カロリーや栄養が気になってしまう", value: { G: 2, C: 1 } },
      { label: "誰かが決めてくれるのを待つ", value: { F: 2, D: 1 } },
    ],
  },
  {
    id: 6,
    text: "理想の「ありがとう」の形は？",
    options: [
      { label: "「最高の思い出になった」と言われたい", value: { H: 2, B: 1 } },
      { label: "「あなたのおかげで楽しめた」と言われたい", value: { B: 2, A: 1 } },
      { label: "「あなたがいて安心した」と言われたい", value: { A: 2, F: 1 } },
      { label: "「よく気がつくね」と言われたい", value: { C: 2, E: 1 } },
    ],
  },
];

const results = {
  A: {
    title: "フロントスタッフ",
    dept: "宿泊部門",
    emoji: "🏨",
    color: "#3B82F6",
    bg: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    accent: "#2563EB",
    desc: "あなたは「その人の笑顔が見たい」と思える、生粋のおもてなし気質。初対面の人とすぐに打ち解けられる明るさと、瞬時に状況を読む観察力が光ります。ホテルの「顔」として、毎日新しい出会いとともに活躍できる人です。",
    keyword: ["人懐っこい", "瞬発力がある", "笑顔が武器"],
  },
  B: {
    title: "レストラン・バースタッフ",
    dept: "料飲部門",
    emoji: "🍷",
    color: "#F59E0B",
    bg: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
    accent: "#D97706",
    desc: "場の空気を読みながら、さりげなくゲストに寄り添えるあなた。おすすめのドリンクや料理を提案して「それにします！」と言われたとき、最高の達成感を感じるタイプです。会話しながらゲストの好みを引き出す接客センスが、料飲サービスの現場で輝きます。",
    keyword: ["気配り上手", "会話が得意", "センスがいい"],
  },
  C: {
    title: "管理・バックオフィス",
    dept: "管理部門",
    emoji: "📋",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    accent: "#7C3AED",
    desc: "ホテル全体が回る仕組みを支えるのがあなた。感情より論理で動き、問題を整理してから行動するタイプ。縁の下の力持ちとして、数字・人事・購買など幅広い領域で組織全体の安定に貢献できる頼れる存在です。",
    keyword: ["ロジカル", "几帳面", "信頼の柱"],
  },
  D: {
    title: "セールス・マーケター",
    dept: "セールス・マーケティング部門",
    emoji: "📣",
    color: "#EC4899",
    bg: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
    accent: "#DB2777",
    desc: "成果にこだわり、ホテルの魅力を世界に伝えたいあなた。数字への意欲と発信センスを兼ね備え、法人営業・SNS・デジタルマーケティングなど戦略的なフィールドで力を発揮します。アイデアと行動力で、集客の最前線に立てる人です。",
    keyword: ["目標志向", "発信力がある", "戦略家"],
  },
  E: {
    title: "施設・エンジニアリング",
    dept: "施設・エンジニアリング部門",
    emoji: "🔧",
    color: "#10B981",
    bg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    accent: "#059669",
    desc: "目立たないけど、なくてはならない存在。空調・電気・設備管理など、ホテルの「快適さ」を陰で守るあなたは、職人気質でコツコツと技術を磨くタイプ。チェックリストや点検作業に充実感を感じられる、縁の下のプロフェッショナルです。",
    keyword: ["職人気質", "コツコツ派", "縁の下の力持ち"],
  },
  F: {
    title: "セキュリティスタッフ",
    dept: "セキュリティ部門",
    emoji: "🛡️",
    color: "#6B7280",
    bg: "linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)",
    accent: "#374151",
    desc: "冷静さと責任感があなたの最大の武器。感情に流されず、状況を客観的に判断できる落ち着きがあります。ゲストや施設の安全を守るセキュリティ業務は、派手ではないけれど、ホテル運営に不可欠な重要ポジションです。",
    keyword: ["冷静沈着", "責任感が強い", "守り人"],
  },
  G: {
    title: "スパ・フィットネス",
    dept: "スパ・レジャー部門",
    emoji: "💆",
    color: "#14B8A6",
    bg: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)",
    accent: "#0D9488",
    desc: "心と体の健康に深い関心を持つあなたは、ゲストの「本当のリラックス」を引き出せる存在。体を動かすことが好きで、フィットネスやウェルネスの知識を活かして、宿泊体験をより豊かにできるホスピタリティのスペシャリストです。",
    keyword: ["健康意識高い", "自由な発想", "癒しのプロ"],
  },
  H: {
    title: "宴会・ウェディングプランナー",
    dept: "宴会・婚礼部門",
    emoji: "💐",
    color: "#F43F5E",
    bg: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)",
    accent: "#E11D48",
    desc: "一生に一度の瞬間を最高の形で届けたいあなた。フットワークが軽く、どんな要望にも応えようとする柔軟性と行動力が光ります。ウェディングや宴会の演出・コーディネートで、ゲストの感動を生み出す仕事がぴったりです。",
    keyword: ["行動力抜群", "感動づくりが好き", "頼られる存在"],
  },
};

function calcResult(answers) {
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
  answers.forEach((ans) => {
    Object.entries(ans).forEach(([k, v]) => {
      scores[k] = (scores[k] || 0) + v;
    });
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

export default function HotelDiagnosis() {
  const [screen, setScreen] = useState("top");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [reveal, setReveal] = useState(false);

  const progress = (current / questions.length) * 100;

  function handleAnswer(value) {
    if (animating) return;
    setSelected(value);
    setAnimating(true);
    setTimeout(() => {
      const newAnswers = [...answers, value];
      if (current + 1 >= questions.length) {
        const key = calcResult(newAnswers);
        setResult(results[key]);
        setAnswers(newAnswers);
        setScreen("result");
        setTimeout(() => setReveal(true), 100);
      } else {
        setAnswers(newAnswers);
        setCurrent(current + 1);
        setSelected(null);
      }
      setAnimating(false);
    }, 350);
  }

  function restart() {
    setScreen("top");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
    setReveal(false);
  }

  const q = questions[current];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FFF5F7",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "24px 16px 48px",
      fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>

        {screen === "top" && (
          <div style={{ textAlign: "center", animation: "fadeIn 0.6s ease" }}>
            <div style={{
              background: "white",
              borderRadius: 28,
              padding: "40px 32px 36px",
              boxShadow: "0 8px 40px rgba(236,72,153,0.12)",
              border: "1.5px solid #FCE7F3",
            }}>
              <div style={{ fontSize: 56, marginBottom: 8 }}>🏨</div>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#EC4899",
                textTransform: "uppercase",
                marginBottom: 12,
              }}>Hotel Staff Diagnosis</div>
              <h1 style={{
                fontSize: 26,
                fontWeight: 900,
                color: "#1F2937",
                lineHeight: 1.35,
                margin: "0 0 8px",
              }}>あなたはどのホテルスタッフ？</h1>
              <p style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                margin: "0 0 28px",
              }}>
                6つの質問に答えるだけで<br />
                あなたにぴったりの職種がわかる！
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 32,
              }}>
                {["宿泊", "料飲", "宴会・婚礼", "セールス", "管理", "施設", "セキュリティ", "スパ"].map(d => (
                  <span key={d} style={{
                    fontSize: 11,
                    background: "#FDF2F8",
                    color: "#DB2777",
                    padding: "4px 10px",
                    borderRadius: 100,
                    fontWeight: 600,
                    border: "1px solid #FBCFE8",
                  }}>{d}</span>
                ))}
              </div>
              <button
                onClick={() => setScreen("quiz")}
                style={{
                  width: "100%",
                  padding: "18px",
                  background: "linear-gradient(135deg, #EC4899, #F43F5E)",
                  color: "white",
                  border: "none",
                  borderRadius: 16,
                  fontSize: 17,
                  fontWeight: 800,
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                  boxShadow: "0 6px 24px rgba(236,72,153,0.35)",
                }}
              >
                診断スタート ✨
              </button>
              <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 14 }}>全6問 · 約1分</p>
            </div>
          </div>
        )}

        {screen === "quiz" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>
            <div style={{ marginBottom: 24 }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}>
                <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}>
                  Question {current + 1} / {questions.length}
                </span>
                <span style={{ fontSize: 12, color: "#EC4899", fontWeight: 700 }}>
                  {Math.round((current / questions.length) * 100)}%
                </span>
              </div>
              <div style={{
                height: 6,
                background: "#FCE7F3",
                borderRadius: 100,
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #EC4899, #F43F5E)",
                  borderRadius: 100,
                  transition: "width 0.4s ease",
                }} />
              </div>
            </div>
            <div style={{
              background: "white",
              borderRadius: 24,
              padding: "32px 28px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              border: "1.5px solid #F3F4F6",
              marginBottom: 16,
            }}>
              <div style={{
                fontSize: 11,
                color: "#EC4899",
                fontWeight: 700,
                letterSpacing: "0.12em",
                marginBottom: 12,
                textTransform: "uppercase",
              }}>Q{current + 1}</div>
              <p style={{
                fontSize: 19,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.5,
                margin: 0,
              }}>{q.text}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {q.options.map((opt, i) => {
                const isSelected = selected === opt.value;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.value)}
                    disabled={animating}
                    style={{
                      width: "100%",
                      padding: "18px 20px",
                      background: isSelected ? "linear-gradient(135deg, #EC4899, #F43F5E)" : "white",
                      color: isSelected ? "white" : "#374151",
                      border: isSelected ? "2px solid transparent" : "2px solid #F3F4F6",
                      borderRadius: 16,
                      fontSize: 15,
                      fontWeight: 700,
                      textAlign: "left",
                      cursor: animating ? "default" : "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      boxShadow: isSelected ? "0 4px 20px rgba(236,72,153,0.3)" : "0 2px 8px rgba(0,0,0,0.04)",
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{
                      minWidth: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isSelected ? "rgba(255,255,255,0.25)" : "#FDF2F8",
                      color: isSelected ? "white" : "#EC4899",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                    }}>
                      {["A", "B", "C", "D"][i]}
                    </span>
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {screen === "result" && result && (
          <div style={{
            animation: "fadeIn 0.5s ease",
            opacity: reveal ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}>
            <div style={{
              background: result.bg,
              borderRadius: 28,
              padding: "40px 28px 32px",
              border: `2px solid ${result.color}22`,
              boxShadow: `0 8px 40px ${result.color}20`,
              marginBottom: 16,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 64, marginBottom: 4 }}>{result.emoji}</div>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: result.accent,
                textTransform: "uppercase",
                marginBottom: 8,
              }}>{result.dept}</div>
              <h2 style={{
                fontSize: 28,
                fontWeight: 900,
                color: "#111827",
                margin: "0 0 20px",
                lineHeight: 1.2,
              }}>{result.title}</h2>
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 24,
              }}>
                {result.keyword.map(k => (
                  <span key={k} style={{
                    fontSize: 12,
                    background: "white",
                    color: result.accent,
                    padding: "5px 12px",
                    borderRadius: 100,
                    fontWeight: 700,
                    border: `1.5px solid ${result.color}44`,
                  }}>#{k}</span>
                ))}
              </div>
              <p style={{
                fontSize: 14,
                color: "#374151",
                lineHeight: 1.85,
                textAlign: "left",
                background: "white",
                borderRadius: 16,
                padding: "20px",
                margin: 0,
                boxShadow: `inset 0 0 0 1.5px ${result.color}22`,
              }}>{result.desc}</p>
            </div>
            <div style={{
              background: "white",
              borderRadius: 20,
              padding: "20px",
              marginBottom: 16,
              border: "1.5px solid #F3F4F6",
              textAlign: "center",
            }}>
              <p style={{ fontSize: 13, color: "#6B7280", margin: "0 0 4px" }}>
                ホテル科で、この夢を形にしよう。
              </p>
              <p style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#111827",
                margin: 0,
              }}>オープンキャンパスで体験してみませんか？</p>
            </div>
            <button
              onClick={restart}
              style={{
                width: "100%",
                padding: "18px",
                background: "white",
                color: "#EC4899",
                border: "2px solid #FBCFE8",
                borderRadius: 16,
                fontSize: 15,
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              もう一度やってみる 🔄
            </button>
          </div>
        )}

      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
