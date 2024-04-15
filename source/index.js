// Styles
import './styles.css';

// WordCloud
import WordCloud from 'wordcloud';

// Settings
const BACKGROUNDS = ['#8c5', '#6ae', '#94d', '#f83', '#e67'];
const WORDS = [
  "AI", "Kubernetes",
  "Git", "GitOps", "GitHub", "GitLab",
  "Linux", "SSH", "Docker", "Container",
  "Database", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
  "AWS", "IAM", "S3", "EC2", "Lambda", "CloudFront",
  "DevOps", "SRE", "Configuration", "Automation", "Optimization", "Performance", "Security",
  "CI/CD", "Continuous", "Integration", "Delivery", "Deployment",
  "IaC", "Infrastructure", "Architecture", "Cloud", "Terraform", "Ansible",
  "Logging", "Monitoring", "Alerting", "Prometheus", "Grafana", "Kibana", "Datadog",
  "Code", "Microservices", "Scripting", "Python", "JavaScript", "HTML", "CSS", "Shell", "Bash", "SQL",
  "Agile", "Scrum", "Kanban"
];

// Canvas and pixel ratio
const windowObject = (typeof window !== "undefined") ? window : null;
const pixelRatio = (windowObject && windowObject.devicePixelRatio) ? windowObject.devicePixelRatio : 1;
const canvas = document.getElementById('background');
const list = WORDS.map((word) => [word, 1]); // list.unshift(["CODERICO", 2]);

// Render
function render() {
  const canvasSize = canvas && canvas.getBoundingClientRect();

  if (canvasSize) {
    const width = canvasSize.width, height = canvasSize.height;
    const backgroundIndex = Math.floor(Math.random() * BACKGROUNDS.length);

    // High pixel ratio support
    canvas.setAttribute('width', width * pixelRatio);
    canvas.setAttribute('height', height * pixelRatio);

    // Word cloud
    WordCloud(canvas, {
      fontFamily: 'Times, serif', fontWeight: 500,
      list: list, gridSize: 55, weightFactor: 37 * pixelRatio,
      rotateRatio: 0.85, rotationSteps: 0.25,
      backgroundColor: BACKGROUNDS[backgroundIndex], color: '#ffffff66'
    });
  }
}

// Resize support
var resizeTimer = null;

if (windowObject) windowObject.addEventListener('resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 500);
});

// Show body
if (document.body) document.body.style.display = 'block';

// Start
render();
