import{i as e,r as t,s as n,t as r}from"./app-C3Io0euD.js";var i=JSON.parse(`{"path":"/main/dsh-brow.html","title":"DS Harness与BrowserSkill浏览器智能体联动","lang":"zh-CN","frontmatter":{"category":["AI Agent"],"date":"2026-09-01T00:00:00.000Z","icon":"chrome","tag":["DeepSeek Harness","CDP","Automation"],"title":"DS Harness与BrowserSkill浏览器智能体联动","description":"AI Agent工程实践-基于DeepSeek Harness与BrowserSkill构建浏览器智能体 实践背景 随着 AI Agent 技术改变着实践方式,在B站上也出现了很多不同的讨论和应用方案分享。 有一些用户认为，现在很多方案过于复杂，需要配置 MCP、额外安装浏览器环境，或者绑定特定框架，搭建成本比较高。他们提出，其实通过 Web Acce...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DS Harness与BrowserSkill浏览器智能体联动\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-09-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sinthome\\",\\"url\\":\\"https://github.com/LSGE271828\\"}]}"],["meta",{"property":"og:url","content":"https://LSGE271828.github.io/main/dsh-brow.html"}],["meta",{"property":"og:site_name","content":"Sinthome"}],["meta",{"property":"og:title","content":"DS Harness与BrowserSkill浏览器智能体联动"}],["meta",{"property":"og:description","content":"AI Agent工程实践-基于DeepSeek Harness与BrowserSkill构建浏览器智能体 实践背景 随着 AI Agent 技术改变着实践方式,在B站上也出现了很多不同的讨论和应用方案分享。 有一些用户认为，现在很多方案过于复杂，需要配置 MCP、额外安装浏览器环境，或者绑定特定框架，搭建成本比较高。他们提出，其实通过 Web Acce..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Automation"}],["meta",{"property":"article:tag","content":"CDP"}],["meta",{"property":"article:tag","content":"DeepSeek Harness"}],["meta",{"property":"article:published_time","content":"2026-09-01T00:00:00.000Z"}]]},"git":{},"readingTime":{"minutes":21.6,"words":6481},"filePathRelative":"main/dsh-brow.md","excerpt":"\\n<h2>实践背景</h2>\\n<p>随着 AI Agent 技术改变着实践方式,在B站上也出现了很多不同的讨论和应用方案分享。</p>\\n<p>有一些用户认为，现在很多方案过于复杂，需要配置 MCP、额外安装浏览器环境，或者绑定特定框架，搭建成本比较高。他们提出，其实通过 Web Access 技能结合浏览器 CDP（Chrome DevTools Protocol），就可以直接让 AI 操作已有的浏览器，不需要重新部署一套环境，流程更加简单。同时，真实浏览器的优势在于可以实时看到 AI 的操作过程，遇到问题时也方便人工介入。</p>\\n<p>但也有部分用户认为，像 Playwright MCP 等方案同样成熟，在自动化控制方面具有较好的稳定性，只是需要额外进行配置。不同方案之间主要区别在于使用场景、扩展能力以及搭建复杂度。</p>","autoDesc":true}`),a={name:`dsh-brow.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="ai-agent工程实践-基于deepseek-harness与browserskill构建浏览器智能体" tabindex="-1"><a class="header-anchor" href="#ai-agent工程实践-基于deepseek-harness与browserskill构建浏览器智能体"><span>AI Agent工程实践-基于DeepSeek Harness与BrowserSkill构建浏览器智能体</span></a></h1><h2 id="实践背景" tabindex="-1"><a class="header-anchor" href="#实践背景"><span>实践背景</span></a></h2><p>随着 AI Agent 技术改变着实践方式,在B站上也出现了很多不同的讨论和应用方案分享。</p><p>有一些用户认为，现在很多方案过于复杂，需要配置 MCP、额外安装浏览器环境，或者绑定特定框架，搭建成本比较高。他们提出，其实通过 Web Access 技能结合浏览器 CDP（Chrome DevTools Protocol），就可以直接让 AI 操作已有的浏览器，不需要重新部署一套环境，流程更加简单。同时，真实浏览器的优势在于可以实时看到 AI 的操作过程，遇到问题时也方便人工介入。</p><p>但也有部分用户认为，像 Playwright MCP 等方案同样成熟，在自动化控制方面具有较好的稳定性，只是需要额外进行配置。不同方案之间主要区别在于使用场景、扩展能力以及搭建复杂度。</p><p>基于这些讨论，我尝试采用 DeepSeek Harness 结合 BrowserSkill 的方式搭建浏览器智能体工作流，通过加载浏览器操作技能，使 AI Agent 能够调用 CDP 控制真实浏览器，并完成网页访问、信息交互以及表格等任务。通过实际搭建和测试，探索一种更加简单、灵活的浏览器智能体实现方式。同时，也结合 Cordis 等浏览器插件扩展方案。</p><figure><img src="https://xss-271828.oss-cn-beijing.aliyuncs.com/img/img/main/dsh1.png" alt="插件构建与导入" tabindex="0" loading="lazy"><figcaption>插件构建与导入</figcaption></figure><h1 id="一、从llm到browser-agent的需求分析" tabindex="-1"><a class="header-anchor" href="#一、从llm到browser-agent的需求分析"><span>一、从LLM到Browser Agent的需求分析</span></a></h1><h2 id="_1-1-普通大模型的限制" tabindex="-1"><a class="header-anchor" href="#_1-1-普通大模型的限制"><span>1.1 普通大模型的限制</span></a></h2><p>传统LLM工作方式：</p><pre><code>用户输入

↓

模型推理

↓

文本输出
</code></pre><p>模型并没有真正改变外部环境。</p><p>例如用户：</p><p>&quot;帮我完成一个网页任务。&quot;</p><p>普通模型只能告诉用户：</p><p>&quot;你可以点击这里，然后输入......&quot;</p><p>但是无法真正执行。</p><p>Browser Agent希望实现：</p><pre><code>用户目标

↓

Agent理解任务

↓

打开浏览器

↓

观察网页

↓

执行操作

↓

完成任务
</code></pre><p>这意味着AI从回答者变成执行者。</p><h2 id="_1-2-为什么选择浏览器作为入口" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么选择浏览器作为入口"><span>1.2 为什么选择浏览器作为入口</span></a></h2><p>浏览器是现代计算环境中最通用的软件入口。</p><p>大量系统：</p><ul><li>企业后台；</li><li>管理系统；</li><li>在线服务；</li><li>数据平台；</li></ul><p>都运行在浏览器中。</p><p>如果AI能够控制浏览器，就相当于获得了一种通用计算机操作能力。</p><p>因此浏览器Agent成为Computer Use方向的重要组成。</p><h1 id="二、传统浏览器自动化技术分析" tabindex="-1"><a class="header-anchor" href="#二、传统浏览器自动化技术分析"><span>二、传统浏览器自动化技术分析</span></a></h1><h2 id="_2-1-selenium时代" tabindex="-1"><a class="header-anchor" href="#_2-1-selenium时代"><span>2.1 Selenium时代</span></a></h2><p>Selenium是最早广泛应用的网页自动化框架之一。</p><p>它通过WebDriver控制浏览器。</p><p>结构：</p><pre><code>Python脚本

↓

Selenium WebDriver

↓

ChromeDriver

↓

Chrome
</code></pre><p>优势：</p><ul><li>成熟；</li><li>稳定；</li><li>生态丰富。</li></ul><p>但是问题：</p><p>它依赖人工编写流程。</p><p>例如：</p><pre><code>find_element()

click()

send_keys()
</code></pre><p>开发人员必须提前知道页面结构。</p><p>这适合测试。</p><p>但是不适合作为通用Agent。</p><h1 id="_2-2-playwright时代" tabindex="-1"><a class="header-anchor" href="#_2-2-playwright时代"><span>2.2 Playwright时代</span></a></h1><p>Playwright进一步提升了浏览器自动化体验。</p><p>优势：</p><ul><li>多浏览器支持；</li><li>自动等待；</li><li>更强定位能力；</li><li>更好的调试能力。</li></ul><p>结构：</p><pre><code>Agent

↓

Playwright

↓

Browser Context

↓

Web Page
</code></pre><p>但是默认情况下：</p><p>Playwright通常创建新的浏览器环境。</p><p>例如：</p><pre><code>新的Cookie

新的Profile

新的登录状态
</code></pre><p>对于自动化测试很好。</p><p>但是对于个人AI助手：</p><p>用户希望：</p><p>&quot;继续使用我已经登录的浏览器&quot;</p><p>这时体验下降。</p><h1 id="三、chrome-cdp探索过程" tabindex="-1"><a class="header-anchor" href="#三、chrome-cdp探索过程"><span>三、Chrome CDP探索过程</span></a></h1><h2 id="_3-1-cdp介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-cdp介绍"><span>3.1 CDP介绍</span></a></h2><p>Chrome DevTools Protocol是Chrome提供的远程控制协议。</p><p>启动：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">chrome.exe</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">remote</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">debugging</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9222</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> --</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">C:\\chrome</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">agent</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Chrome开放：</p><pre><code>localhost:9222
</code></pre><p>访问：</p><pre><code>http://localhost:9222/json
</code></pre><p>可以获得：</p><ul><li>页面列表；</li><li>WebSocket地址；</li><li>调试入口。</li></ul><h2 id="_3-2-cdp优势" tabindex="-1"><a class="header-anchor" href="#_3-2-cdp优势"><span>3.2 CDP优势</span></a></h2><p>最大的优势：</p><p>控制真实浏览器。</p><p>因此：</p><p>用户可以：</p><ul><li>看见AI操作；</li><li>手动接管；</li><li>保留登录状态。</li></ul><p>这也是很多个人Agent方案喜欢CDP的重要原因。</p><h2 id="_3-3-cdp不足" tabindex="-1"><a class="header-anchor" href="#_3-3-cdp不足"><span>3.3 CDP不足</span></a></h2><p>CDP只是控制协议。</p><p>它提供：</p><pre><code>click
type
evaluate
screenshot
</code></pre><p>但是没有：</p><pre><code>这个按钮是什么意义？
下一步应该做什么？
</code></pre><p>因此需要更高层Agent框架。</p><h1 id="四、browserskill技术路线选择" tabindex="-1"><a class="header-anchor" href="#四、browserskill技术路线选择"><span>四、BrowserSkill技术路线选择</span></a></h1><h2 id="_4-1-browserskill定位" tabindex="-1"><a class="header-anchor" href="#_4-1-browserskill定位"><span>4.1 BrowserSkill定位</span></a></h2><p>BrowserSkill不是简单自动化工具。</p><p>它提供：</p><pre><code>Browser Control

+

Semantic Observation

+

Agent Interface
</code></pre><p>目标：</p><p>让AI能够理解浏览器。</p><h1 id="五、整体架构设计" tabindex="-1"><a class="header-anchor" href="#五、整体架构设计"><span>五、整体架构设计</span></a></h1><p>最终架构：</p><pre><code>                DeepSeek Harness

                       |

          BrowserSkill DSH Plugin

                       |

                    bsk CLI

                       |

              BrowserSkill Daemon

                       |

             Browser Extension

                       |

             Chrome / Edge Agent Window

                       |

                    Website
</code></pre><p>每层职责：</p><h2 id="deepseek-harness" tabindex="-1"><a class="header-anchor" href="#deepseek-harness"><span>DeepSeek Harness</span></a></h2><p>负责：</p><ul><li>大模型推理；</li><li>Agent任务规划；</li><li>工具调用。</li></ul><h2 id="dsh-plugin" tabindex="-1"><a class="header-anchor" href="#dsh-plugin"><span>DSH Plugin</span></a></h2><p>负责：</p><p>连接DeepSeek Harness和BrowserSkill。</p><h2 id="bsk-cli" tabindex="-1"><a class="header-anchor" href="#bsk-cli"><span>bsk CLI</span></a></h2><p>负责：</p><ul><li>session管理；</li><li>页面操作；</li><li>浏览器控制。</li></ul><h2 id="daemon" tabindex="-1"><a class="header-anchor" href="#daemon"><span>Daemon</span></a></h2><p>负责：</p><p>后台通信服务。</p><h2 id="extension" tabindex="-1"><a class="header-anchor" href="#extension"><span>Extension</span></a></h2><p>负责：</p><p>浏览器侧执行。</p><h1 id="六、源码结构解析" tabindex="-1"><a class="header-anchor" href="#六、源码结构解析"><span>六、源码结构解析</span></a></h1><p>源码：</p><pre><code>BrowserSkill
</code></pre><p>主要目录：</p><h2 id="apps" tabindex="-1"><a class="header-anchor" href="#apps"><span>apps</span></a></h2><p>应用程序。</p><p>其中：</p><pre><code>apps/extension
</code></pre><p>是浏览器扩展。</p><h2 id="crates" tabindex="-1"><a class="header-anchor" href="#crates"><span>crates</span></a></h2><p>Rust工程。</p><p>主要负责：</p><ul><li>CLI；</li><li>服务；</li><li>核心逻辑。</li></ul><h2 id="packages" tabindex="-1"><a class="header-anchor" href="#packages"><span>packages</span></a></h2><p>共享npm包。</p><h2 id="skill" tabindex="-1"><a class="header-anchor" href="#skill"><span>skill</span></a></h2><p>Agent Skill定义。</p><h1 id="七、完整环境搭建流程" tabindex="-1"><a class="header-anchor" href="#七、完整环境搭建流程"><span>七、完整环境搭建流程</span></a></h1><h2 id="_7-1-git获取源码" tabindex="-1"><a class="header-anchor" href="#_7-1-git获取源码"><span>7.1 Git获取源码</span></a></h2><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git clone https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">github.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Tencent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">BrowserSkill.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>进入：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cd BrowserSkill</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="_7-2-rust安装" tabindex="-1"><a class="header-anchor" href="#_7-2-rust安装"><span>7.2 Rust安装</span></a></h1><p>由于bsk CLI基于Rust实现，需要Rust工具链。</p><p>安装：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Invoke-WebRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">win.rustup.rs </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">OutFile </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">rustup-init.exe</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.\\</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">rustup-init.exe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rustc </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">version</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cargo </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-3-pnpm构建体系" tabindex="-1"><a class="header-anchor" href="#_7-3-pnpm构建体系"><span>7.3 pnpm构建体系</span></a></h1><p>BrowserSkill采用：</p><ul><li>pnpm workspace；</li><li>React；</li><li>TypeScript；</li><li>WXT。</li></ul><p>安装：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">npm install </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">g pnpm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装依赖：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pnpm install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="八、extension构建过程" tabindex="-1"><a class="header-anchor" href="#八、extension构建过程"><span>八、Extension构建过程</span></a></h1><p>进入：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">cd apps</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">extension</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>package.json：</p><pre><code>wxt build
</code></pre><p>执行：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">pnpm build</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>生成：</p><pre><code>dist
</code></pre><p>加载：</p><pre><code>chrome://extensions/
</code></pre><p>开启开发者模式。</p><p>选择：</p><pre><code>Load unpacked
</code></pre><h1 id="九、bsk-cli完整使用" tabindex="-1"><a class="header-anchor" href="#九、bsk-cli完整使用"><span>九、bsk CLI完整使用</span></a></h1><h2 id="查看帮助" tabindex="-1"><a class="header-anchor" href="#查看帮助"><span>查看帮助</span></a></h2><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>任何命令：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk xxx </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="daemon-1" tabindex="-1"><a class="header-anchor" href="#daemon-1"><span>daemon</span></a></h1><p>查看：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="session" tabindex="-1"><a class="header-anchor" href="#session"><span>session</span></a></h1><p>创建：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>停止：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="页面控制" tabindex="-1"><a class="header-anchor" href="#页面控制"><span>页面控制</span></a></h1><p>导航：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk navigate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID URL</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>观察：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk observe </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>截图：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk screenshot </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结构：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk snapshot </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>点击：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk click </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">@e1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk fill </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">@e2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> text</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="十、实际踩坑记录" tabindex="-1"><a class="header-anchor" href="#十、实际踩坑记录"><span>十、实际踩坑记录</span></a></h1><h2 id="_10-1-powershell架构问题" tabindex="-1"><a class="header-anchor" href="#_10-1-powershell架构问题"><span>10.1 PowerShell架构问题</span></a></h2><p>安装脚本：</p><pre><code>unsupported architecture
</code></pre><p>原因：</p><p>环境变量识别异常。</p><p>解决：</p><p>源码方式安装。</p><h2 id="_10-2-git代理问题" tabindex="-1"><a class="header-anchor" href="#_10-2-git代理问题"><span>10.2 Git代理问题</span></a></h2><p>错误：</p><pre><code>127.0.0.1:7890
</code></pre><p>解决：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git config </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">global </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">unset http.proxy</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git config </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">global </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">unset https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-3-bsk不存在" tabindex="-1"><a class="header-anchor" href="#_10-3-bsk不存在"><span>10.3 bsk不存在</span></a></h2><p>原因：</p><p>插件和CLI是两个组件。</p><p>需要：</p><p>安装bsk。</p><h2 id="_10-4-extension未连接" tabindex="-1"><a class="header-anchor" href="#_10-4-extension未连接"><span>10.4 Extension未连接</span></a></h2><p>错误：</p><pre><code>no browser is connected
</code></pre><p>原因：</p><p>浏览器扩展没有连接daemon。</p><p>解决：</p><p>构建并加载extension。</p><h1 id="十一、pc网页显示移动端分析" tabindex="-1"><a class="header-anchor" href="#十一、pc网页显示移动端分析"><span>十一、PC网页显示移动端分析</span></a></h1><p>网页响应式设计通常依据：</p><ul><li>User-Agent；</li><li>viewport；</li><li>touch能力。</li></ul><p>如果Agent Window尺寸较小：</p><p>网页可能自动切换：</p><pre><code>Desktop Layout

↓

Mobile Layout
</code></pre><p>检查：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk evaluate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;window.innerWidth&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>以及：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk evaluate </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">session ID </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;navigator.userAgent&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>确保：</p><p>不是：</p><pre><code>Android
Mobile
iPhone
</code></pre><h1 id="十二、browserskill与cdp方案比较" tabindex="-1"><a class="header-anchor" href="#十二、browserskill与cdp方案比较"><span>十二、BrowserSkill与CDP方案比较</span></a></h1><h2 id="cdp方案" tabindex="-1"><a class="header-anchor" href="#cdp方案"><span>CDP方案</span></a></h2><p>优点：</p><ul><li>接管已有Chrome；</li><li>登录状态复用；</li><li>人工干预方便。</li></ul><p>缺点：</p><ul><li>需要自己开发Skill；</li><li>页面理解能力弱。</li></ul><h2 id="browserskill方案" tabindex="-1"><a class="header-anchor" href="#browserskill方案"><span>BrowserSkill方案</span></a></h2><p>优点：</p><ul><li>Agent接口完善；</li><li>页面语义理解；</li><li>Session管理；</li><li>Extension支持。</li></ul><p>缺点：</p><ul><li>使用Agent Window；</li><li>需要完整生态。</li></ul><h1 id="十三、最终总结" tabindex="-1"><a class="header-anchor" href="#十三、最终总结"><span>十三、最终总结</span></a></h1><p>本项目完成了一套完整的浏览器Agent基础设施。</p><p>最终系统：</p><pre><code>DeepSeek Harness

↓

BrowserSkill

↓

bsk

↓

Browser Extension

↓

Agent Window

↓

Internet
</code></pre><p>它实现了：</p><ul><li>AI控制浏览器；</li><li>AI理解网页；</li><li>AI执行流程；</li><li>人机协同操作。</li></ul><p>从技术演进角度：</p><p>Selenium代表：</p><p>&quot;脚本控制浏览器&quot;。</p><p>Playwright代表：</p><p>&quot;工程化浏览器自动化&quot;。</p><p>BrowserSkill代表：</p><p>&quot;面向AI Agent的浏览器操作系统接口&quot;。</p><p>未来扩展方向：</p><ul><li>AI网页测试；</li><li>企业流程自动化；</li><li>Computer Use Agent；</li><li>多Agent协作；</li><li>长期任务执行。</li></ul><p>BrowserSkill让大语言模型从语言世界进入真实计算环境，是构建下一代智能体系统的重要基础设施。</p><h1 id="附录-完整部署思路复盘" tabindex="-1"><a class="header-anchor" href="#附录-完整部署思路复盘"><span>附录：完整部署思路复盘</span></a></h1><p>整个项目经历了几个阶段。</p><p>第一阶段：</p><p>验证浏览器是否可以被AI控制。</p><p>因此采用：</p><p>Chrome CDP。</p><p>通过：</p><p>remote-debugging-port</p><p>验证浏览器通信能力。</p><p>第二阶段：</p><p>寻找成熟Agent框架。</p><p>发现BrowserSkill提供：</p><ul><li>CLI；</li><li>Extension；</li><li>Session；</li><li>Agent Window。</li></ul><p>第三阶段：</p><p>完成工程化部署：</p><p>源码获取；</p><p>Rust构建；</p><p>pnpm依赖；</p><p>Extension编译；</p><p>DSH插件接入。</p><p>第四阶段：</p><p>验证实际任务。</p><p>包括：</p><p>创建Session；</p><p>打开网页；</p><p>观察页面；</p><p>执行操作。</p><p>这个过程体现了AI Agent项目的典型开发路径：</p><p>先验证底层能力，</p><p>再选择框架，</p><p>最后工程化整合。</p><h1 id="附录-完整部署思路复盘-1" tabindex="-1"><a class="header-anchor" href="#附录-完整部署思路复盘-1"><span>附录：完整部署思路复盘</span></a></h1><p>整个项目经历了几个阶段。</p><p>第一阶段：</p><p>验证浏览器是否可以被AI控制。</p><p>因此采用：</p><p>Chrome CDP。</p><p>通过：</p><p>remote-debugging-port</p><p>验证浏览器通信能力。</p><p>第二阶段：</p><p>寻找成熟Agent框架。</p><p>发现BrowserSkill提供：</p><ul><li>CLI；</li><li>Extension；</li><li>Session；</li><li>Agent Window。</li></ul><p>第三阶段：</p><p>完成工程化部署：</p><p>源码获取；</p><p>Rust构建；</p><p>pnpm依赖；</p><p>Extension编译；</p><p>DSH插件接入。</p><p>第四阶段：</p><p>验证实际任务。</p><p>包括：</p><p>创建Session；</p><p>打开网页；</p><p>观察页面；</p><p>执行操作。</p><p>这个过程体现了AI Agent项目的典型开发路径：</p><p>先验证底层能力，</p><p>再选择框架，</p><p>最后工程化整合。</p><h1 id="附录-完整部署思路复盘-2" tabindex="-1"><a class="header-anchor" href="#附录-完整部署思路复盘-2"><span>附录：完整部署思路复盘</span></a></h1><p>整个项目经历了几个阶段。</p><p>第一阶段：</p><p>验证浏览器是否可以被AI控制。</p><p>因此采用：</p><p>Chrome CDP。</p><p>通过：</p><p>remote-debugging-port</p><p>验证浏览器通信能力。</p><p>第二阶段：</p><p>寻找成熟Agent框架。</p><p>发现BrowserSkill提供：</p><ul><li>CLI；</li><li>Extension；</li><li>Session；</li><li>Agent Window。</li></ul><p>第三阶段：</p><p>完成工程化部署：</p><p>源码获取；</p><p>Rust构建；</p><p>pnpm依赖；</p><p>Extension编译；</p><p>DSH插件接入。</p><p>第四阶段：</p><p>验证实际任务。</p><p>包括：</p><p>创建Session；</p><p>打开网页；</p><p>观察页面；</p><p>执行操作。</p><p>这个过程体现了AI Agent项目的典型开发路径：</p><p>先验证底层能力，</p><p>再选择框架，</p><p>最后工程化整合。</p><hr><h1 id="十四、从自动化脚本到智能体系统-技术路线演进分析" tabindex="-1"><a class="header-anchor" href="#十四、从自动化脚本到智能体系统-技术路线演进分析"><span>十四、从自动化脚本到智能体系统：技术路线演进分析</span></a></h1><h2 id="_14-1-自动化工具的发展过程" tabindex="-1"><a class="header-anchor" href="#_14-1-自动化工具的发展过程"><span>14.1 自动化工具的发展过程</span></a></h2><p>浏览器自动化并不是一个新概念。</p><p>早期网页自动化主要解决的是：</p><blockquote><p>让程序代替人工重复点击网页。</p></blockquote><p>例如：</p><ul><li>自动登录；</li><li>自动提交表单；</li><li>自动抓取数据。</li></ul><p>这一阶段的核心思想：</p><pre><code>人提前设计流程

↓

程序严格执行
</code></pre><p>因此自动化系统通常具有明确的输入和输出。</p><p>例如：</p><pre><code>if 找到按钮:
    click()

else:
    error
</code></pre><p>这种模式非常稳定，但是缺少智能。</p><hr><h2 id="_14-2-为什么传统自动化无法直接升级为agent" tabindex="-1"><a class="header-anchor" href="#_14-2-为什么传统自动化无法直接升级为agent"><span>14.2 为什么传统自动化无法直接升级为Agent</span></a></h2><p>很多人认为：</p><p>&quot;给Playwright接一个大模型，就是Agent。&quot;</p><p>实际上并不是。</p><p>原因在于：</p><p>浏览器控制只是执行能力。</p><p>真正的Agent还需要：</p><h2 id="目标理解" tabindex="-1"><a class="header-anchor" href="#目标理解"><span>目标理解</span></a></h2><p>例如：</p><p>用户说：</p><blockquote><p>帮我完成网页测试。</p></blockquote><p>模型需要理解：</p><ul><li>测试目标是什么；</li><li>哪些步骤重要；</li><li>什么结果代表完成。</li></ul><hr><h2 id="环境感知" tabindex="-1"><a class="header-anchor" href="#环境感知"><span>环境感知</span></a></h2><p>Agent需要知道：</p><p>当前页面是什么状态。</p><p>例如：</p><p>当前页面：</p><pre><code>登录页面
</code></pre><p>下一步：</p><pre><code>输入账号
</code></pre><p>当前页面：</p><pre><code>验证码页面
</code></pre><p>下一步：</p><pre><code>请求人工帮助
</code></pre><hr><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划"><span>动态规划</span></a></h2><p>网页不是固定环境。</p><p>可能出现：</p><ul><li>弹窗；</li><li>网络错误；</li><li>页面变化；</li><li>权限限制。</li></ul><p>因此Agent需要：</p><p>观察结果。</p><p>重新规划。</p><p>继续执行。</p><p>这也是BrowserSkill加入页面观察能力的重要原因。</p><hr><h1 id="十五、browserskill工作流程深入分析" tabindex="-1"><a class="header-anchor" href="#十五、browserskill工作流程深入分析"><span>十五、BrowserSkill工作流程深入分析</span></a></h1><h2 id="_15-1-用户任务进入系统" tabindex="-1"><a class="header-anchor" href="#_15-1-用户任务进入系统"><span>15.1 用户任务进入系统</span></a></h2><p>流程：</p><pre><code>用户输入任务

↓

DeepSeek Harness

↓

Agent规划
</code></pre><p>例如：</p><p>用户：</p><pre><code>打开百度搜索BrowserSkill
</code></pre><hr><h2 id="_15-2-agent调用浏览器工具" tabindex="-1"><a class="header-anchor" href="#_15-2-agent调用浏览器工具"><span>15.2 Agent调用浏览器工具</span></a></h2><p>模型不会直接操作鼠标。</p><p>而是调用工具：</p><p>例如：</p><pre><code>navigate

snapshot

click

fill

screenshot
</code></pre><hr><h2 id="_15-3-browserskill执行动作" tabindex="-1"><a class="header-anchor" href="#_15-3-browserskill执行动作"><span>15.3 BrowserSkill执行动作</span></a></h2><p>BrowserSkill负责：</p><p>将抽象动作转换为：</p><p>真实浏览器操作。</p><p>例如：</p><p>Agent：</p><pre><code>点击搜索按钮
</code></pre><p>转换：</p><pre><code>找到对应元素

↓

触发浏览器事件

↓

返回结果
</code></pre><hr><h2 id="_15-4-结果反馈" tabindex="-1"><a class="header-anchor" href="#_15-4-结果反馈"><span>15.4 结果反馈</span></a></h2><p>浏览器返回：</p><ul><li>页面变化；</li><li>DOM变化；</li><li>截图；</li><li>状态。</li></ul><p>反馈给Agent：</p><pre><code>观察

↓

判断

↓

下一步动作
</code></pre><p>形成闭环：</p><pre><code>Action

↓

Observation

↓

Reasoning

↓

Action
</code></pre><p>这就是Agent系统核心。</p><hr><h1 id="十六、bsk-cli设计思想分析" tabindex="-1"><a class="header-anchor" href="#十六、bsk-cli设计思想分析"><span>十六、bsk CLI设计思想分析</span></a></h1><p>bsk并不是普通命令行工具。</p><p>它承担的是：</p><p>Agent与浏览器之间的桥梁。</p><p>整体：</p><pre><code>AI Agent

↓

bsk CLI

↓

Daemon

↓

Browser Extension

↓

Browser
</code></pre><hr><h2 id="_16-1-为什么需要daemon" tabindex="-1"><a class="header-anchor" href="#_16-1-为什么需要daemon"><span>16.1 为什么需要Daemon</span></a></h2><p>如果每次：</p><p>Agent调用工具</p><p>都重新连接浏览器：</p><p>效率很低。</p><p>因此BrowserSkill设计：</p><pre><code>长期运行Daemon
</code></pre><p>负责：</p><ul><li>浏览器连接；</li><li>Session管理；</li><li>状态维护。</li></ul><hr><h2 id="_16-2-session设计" tabindex="-1"><a class="header-anchor" href="#_16-2-session设计"><span>16.2 Session设计</span></a></h2><p>Session类似：</p><p>一个独立浏览器任务上下文。</p><p>例如：</p><p>任务A：</p><pre><code>购物网站
</code></pre><p>任务B：</p><pre><code>企业后台
</code></pre><p>可以使用不同Session。</p><p>优势：</p><ul><li>状态隔离；</li><li>避免任务冲突；</li><li>方便管理。</li></ul><hr><h1 id="十七、browser-extension作用分析" tabindex="-1"><a class="header-anchor" href="#十七、browser-extension作用分析"><span>十七、Browser Extension作用分析</span></a></h1><p>浏览器扩展不是简单插件。</p><p>它承担浏览器侧Agent执行。</p><p>主要负责：</p><h2 id="页面通信" tabindex="-1"><a class="header-anchor" href="#页面通信"><span>页面通信</span></a></h2><p>扩展可以访问：</p><ul><li>页面DOM；</li><li>浏览器事件；</li><li>当前标签页。</li></ul><hr><h2 id="操作执行" tabindex="-1"><a class="header-anchor" href="#操作执行"><span>操作执行</span></a></h2><p>例如：</p><p>点击：</p><pre><code>button
</code></pre><p>输入：</p><pre><code>input
</code></pre><p>滚动：</p><pre><code>window.scroll
</code></pre><hr><h2 id="信息采集" tabindex="-1"><a class="header-anchor" href="#信息采集"><span>信息采集</span></a></h2><p>提供：</p><ul><li>页面结构；</li><li>可访问性信息；</li><li>视觉信息。</li></ul><p>帮助Agent理解页面。</p><hr><h1 id="十八、为什么agent-window比无头浏览器更适合个人ai助手" tabindex="-1"><a class="header-anchor" href="#十八、为什么agent-window比无头浏览器更适合个人ai助手"><span>十八、为什么Agent Window比无头浏览器更适合个人AI助手</span></a></h1><p>无头浏览器：</p><pre><code>后台运行

用户不可见
</code></pre><p>适合：</p><p>自动测试。</p><p>但是个人AI助手更需要：</p><pre><code>透明执行
</code></pre><p>用户可以：</p><ul><li>看AI做什么；</li><li>随时暂停；</li><li>手动修改。</li></ul><p>因此：</p><p>Agent Window更符合Human-in-the-loop设计。</p><hr><h1 id="十九、完整故障排查方法论" tabindex="-1"><a class="header-anchor" href="#十九、完整故障排查方法论"><span>十九、完整故障排查方法论</span></a></h1><h2 id="_19-1-bsk找不到" tabindex="-1"><a class="header-anchor" href="#_19-1-bsk找不到"><span>19.1 bsk找不到</span></a></h2><p>检查：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果失败：</p><p>说明：</p><p>PATH没有配置。</p><hr><h2 id="_19-2-daemon异常" tabindex="-1"><a class="header-anchor" href="#_19-2-daemon异常"><span>19.2 daemon异常</span></a></h2><p>检查：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>关注：</p><pre><code>daemon version

browser connected
</code></pre><hr><h2 id="_19-3-浏览器没有连接" tabindex="-1"><a class="header-anchor" href="#_19-3-浏览器没有连接"><span>19.3 浏览器没有连接</span></a></h2><p>检查：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk browsers</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果：</p><pre><code>0 browser
</code></pre><p>说明：</p><p>Extension没有连接。</p><hr><h2 id="_19-4-session启动失败" tabindex="-1"><a class="header-anchor" href="#_19-4-session启动失败"><span>19.4 Session启动失败</span></a></h2><p>执行：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session start </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>增加日志。</p><hr><h1 id="二十、项目实践经验总结" tabindex="-1"><a class="header-anchor" href="#二十、项目实践经验总结"><span>二十、项目实践经验总结</span></a></h1><p>通过整个搭建过程，可以发现AI Agent项目和传统软件项目最大的区别：</p><p>传统软件：</p><pre><code>功能开发

↓

测试

↓

上线
</code></pre><p>Agent项目：</p><pre><code>能力探索

↓

工具接入

↓

环境理解

↓

反馈优化
</code></pre><p>很多问题不是代码错误。</p><p>而是：</p><p>系统边界理解错误。</p><p>例如：</p><p>最初认为：</p><p>BrowserSkill可以直接连接：</p><pre><code>localhost:9222
</code></pre><p>后来发现：</p><p>它设计的是：</p><pre><code>Extension

↓

Daemon

↓

Agent Window
</code></pre><p>这就是实际工程中：</p><p>阅读架构比写代码更重要。</p><hr><h1 id="二十一、未来扩展方向" tabindex="-1"><a class="header-anchor" href="#二十一、未来扩展方向"><span>二十一、未来扩展方向</span></a></h1><h2 id="_21-1-网页自动测试agent" tabindex="-1"><a class="header-anchor" href="#_21-1-网页自动测试agent"><span>21.1 网页自动测试Agent</span></a></h2><p>输入：</p><pre><code>测试这个网站
</code></pre><p>Agent自动：</p><ul><li>浏览页面；</li><li>点击功能；</li><li>发现异常；</li><li>生成报告。</li></ul><hr><h2 id="_21-2-企业流程agent" tabindex="-1"><a class="header-anchor" href="#_21-2-企业流程agent"><span>21.2 企业流程Agent</span></a></h2><p>例如：</p><p>ERP：</p><pre><code>读取订单

↓

更新系统

↓

生成报告
</code></pre><hr><h2 id="_21-3-个人computer-use-agent" tabindex="-1"><a class="header-anchor" href="#_21-3-个人computer-use-agent"><span>21.3 个人Computer Use Agent</span></a></h2><p>未来：</p><p>AI不仅操作浏览器。</p><p>还可以：</p><ul><li>控制桌面；</li><li>操作文件；</li><li>使用软件。</li></ul><p>形成：</p><p>个人智能计算助手。</p><hr><h1 id="二十二、总结" tabindex="-1"><a class="header-anchor" href="#二十二、总结"><span>二十二、总结</span></a></h1><p>本项目完整记录了从浏览器控制探索，到BrowserSkill Agent系统落地的全过程。</p><p>核心技术路线：</p><pre><code>Chrome CDP探索

↓

BrowserSkill选型

↓

Rust构建bsk

↓

pnpm构建Extension

↓

DeepSeek Harness接入

↓

Agent Window运行
</code></pre><p>最终形成：</p><p>一个能够连接大语言模型与真实浏览器环境的智能体系统。</p><p>这不仅是一个浏览器自动化项目，更是一次对未来Computer Use<br> Agent架构的实践探索。</p><hr><h1 id="二十三、完整搭建过程时间线复盘" tabindex="-1"><a class="header-anchor" href="#二十三、完整搭建过程时间线复盘"><span>二十三、完整搭建过程时间线复盘</span></a></h1><p>前面的章节主要从技术架构角度分析 BrowserSkill。</p><p>下面按照实际搭建过程，对整个项目路径进行完整复盘。</p><p>这种记录方式更接近真实工程开发过程，因为一个完整项目通常不是一次完成，而是在不断发现问题、验证假设、调整方案中逐渐完善。</p><hr><h1 id="_23-1-第一阶段-明确目标" tabindex="-1"><a class="header-anchor" href="#_23-1-第一阶段-明确目标"><span>23.1 第一阶段：明确目标</span></a></h1><p>项目最初目标：</p><blockquote><p>让 DeepSeek Harness 具备浏览器操作能力，并且能够看到 AI<br> 的操作过程，在必要时人工接管。</p></blockquote><p>因此最核心需求包括：</p><h2 id="需求一-真实浏览器环境" tabindex="-1"><a class="header-anchor" href="#需求一-真实浏览器环境"><span>需求一：真实浏览器环境</span></a></h2><p>不是：</p><pre><code>隐藏浏览器
</code></pre><p>而是：</p><pre><code>用户可见浏览器
</code></pre><p>原因：</p><p>AI执行过程中需要：</p><ul><li>调试；</li><li>观察；</li><li>人工干预。</li></ul><hr><h2 id="需求二-保持浏览器状态" tabindex="-1"><a class="header-anchor" href="#需求二-保持浏览器状态"><span>需求二：保持浏览器状态</span></a></h2><p>例如：</p><p>用户已经登录：</p><ul><li>企业后台；</li><li>GitHub；</li><li>数据平台；</li><li>管理系统。</li></ul><p>希望：</p><p>AI继续使用当前环境。</p><hr><h2 id="需求三-agent自主操作" tabindex="-1"><a class="header-anchor" href="#需求三-agent自主操作"><span>需求三：Agent自主操作</span></a></h2><p>不仅执行固定脚本。</p><p>而是：</p><pre><code>理解目标

↓

观察页面

↓

自主决定动作
</code></pre><hr><h1 id="二十四、第一条技术路线-cdp验证" tabindex="-1"><a class="header-anchor" href="#二十四、第一条技术路线-cdp验证"><span>二十四、第一条技术路线：CDP验证</span></a></h1><p>为了验证浏览器控制能力，首先选择Chrome CDP。</p><p>启动：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&amp; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">remote</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">debugging</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">port</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9222</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">user</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dir</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;C:\\chrome-agent&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功后访问：</p><pre><code>http://localhost:9222/json
</code></pre><p>返回：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-json"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;webSocketDebuggerUrl&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ws://localhost:9222/devtools/page/xxx&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这一步证明：</p><pre><code>Chrome

↓

CDP

↓

外部程序
</code></pre><p>链路已经建立。</p><hr><h1 id="二十五、为什么没有直接采用cdp最终方案" tabindex="-1"><a class="header-anchor" href="#二十五、为什么没有直接采用cdp最终方案"><span>二十五、为什么没有直接采用CDP最终方案</span></a></h1><p>虽然CDP成功，但是继续分析发现：</p><p>它解决的是：</p><pre><code>浏览器控制问题
</code></pre><p>不是：</p><pre><code>Agent理解问题
</code></pre><p>例如：</p><p>CDP可以执行：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-javascript"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">querySelector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;#button&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>但是它不知道：</p><p>这个按钮是不是用户需要点击的。</p><p>因此：</p><p>CDP适合作为底层能力。</p><p>不适合作为完整Agent框架。</p><hr><h1 id="二十六、第二条路线-寻找开源agent浏览器框架" tabindex="-1"><a class="header-anchor" href="#二十六、第二条路线-寻找开源agent浏览器框架"><span>二十六、第二条路线：寻找开源Agent浏览器框架</span></a></h1><p>随后寻找现有开源方案。</p><p>主要比较：</p><h2 id="playwright-mcp" tabindex="-1"><a class="header-anchor" href="#playwright-mcp"><span>Playwright MCP</span></a></h2><p>特点：</p><ul><li>标准化；</li><li>工程成熟；</li><li>MCP生态。</li></ul><p>适合：</p><p>企业自动化。</p><hr><h2 id="browser-use" tabindex="-1"><a class="header-anchor" href="#browser-use"><span>Browser Use</span></a></h2><p>特点：</p><ul><li>强调网页Agent；</li><li>提供任务规划。</li></ul><p>适合：</p><p>研究Agent逻辑。</p><hr><h2 id="browserskill" tabindex="-1"><a class="header-anchor" href="#browserskill"><span>BrowserSkill</span></a></h2><p>特点：</p><ul><li>面向Agent设计；</li><li>有浏览器扩展；</li><li>有CLI；</li><li>有Session；</li><li>有语义观察。</li></ul><p>最终选择：</p><p>BrowserSkill。</p><hr><h1 id="二十七、browserskill安装过程详细记录" tabindex="-1"><a class="header-anchor" href="#二十七、browserskill安装过程详细记录"><span>二十七、BrowserSkill安装过程详细记录</span></a></h1><h2 id="_27-1-git获取源码" tabindex="-1"><a class="header-anchor" href="#_27-1-git获取源码"><span>27.1 Git获取源码</span></a></h2><p>执行：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git clone https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">github.com</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Tencent</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">BrowserSkill.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>遇到：</p><pre><code>Failed to connect to 127.0.0.1 port 7890
</code></pre><p>原因：</p><p>Git配置了代理。</p><p>解决：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git config </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">global </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">unset http.proxy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">git config </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">global </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">unset https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新clone成功。</p><hr><h1 id="_27-2-安装rust" tabindex="-1"><a class="header-anchor" href="#_27-2-安装rust"><span>27.2 安装Rust</span></a></h1><p>最初尝试：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">winget install Rustlang.Rustup</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>发现：</p><pre><code>winget not recognized
</code></pre><p>说明当前Windows环境没有winget。</p><p>随后采用：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Invoke-WebRequest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">win.rustup.rs </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">OutFile </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">rustup-init.exe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装Rust。</p><p>验证：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rustc </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>成功。</p><hr><h1 id="二十八、为什么browserskill需要rust和pnpm" tabindex="-1"><a class="header-anchor" href="#二十八、为什么browserskill需要rust和pnpm"><span>二十八、为什么BrowserSkill需要Rust和pnpm</span></a></h1><p>很多初学者看到：</p><pre><code>Rust
pnpm
React
Extension
</code></pre><p>会疑惑：</p><p>为什么浏览器工具需要这么多技术？</p><p>原因：</p><p>BrowserSkill不是一个简单脚本。</p><p>它包含：</p><h2 id="rust部分" tabindex="-1"><a class="header-anchor" href="#rust部分"><span>Rust部分</span></a></h2><p>负责：</p><ul><li>CLI；</li><li>daemon；</li><li>高性能通信。</li></ul><h2 id="node部分" tabindex="-1"><a class="header-anchor" href="#node部分"><span>Node部分</span></a></h2><p>负责：</p><ul><li>Extension；</li><li>UI；</li><li>前端构建。</li></ul><h2 id="浏览器部分" tabindex="-1"><a class="header-anchor" href="#浏览器部分"><span>浏览器部分</span></a></h2><p>负责：</p><ul><li>页面操作；</li><li>内容注入；</li><li>状态同步。</li></ul><p>所以它实际上是一个完整系统。</p><hr><h1 id="二十九、deepseek-harness插件与源码关系" tabindex="-1"><a class="header-anchor" href="#二十九、deepseek-harness插件与源码关系"><span>二十九、DeepSeek Harness插件与源码关系</span></a></h1><p>这里容易产生误解。</p><p>安装：</p><pre><code>browser-skill-dsh-plugin
</code></pre><p>并不等于：</p><p>完整BrowserSkill。</p><p>关系：</p><pre><code>BrowserSkill源码

        |

        | build

        ↓

bsk CLI

        |

        ↓

DSH Plugin调用
</code></pre><p>其中：</p><p>插件负责：</p><pre><code>DeepSeek Harness
</code></pre><p>连接。</p><p>而：</p><p>bsk负责：</p><pre><code>真正浏览器控制
</code></pre><hr><h1 id="三十、bsk运行链路分析" tabindex="-1"><a class="header-anchor" href="#三十、bsk运行链路分析"><span>三十、bsk运行链路分析</span></a></h1><p>当执行：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>背后流程：</p><pre><code>命令行

↓

bsk CLI

↓

Daemon

↓

寻找浏览器Extension

↓

创建Session

↓

生成Agent Window

↓

返回Session ID
</code></pre><p>因此：</p><p>session不是简单标签。</p><p>它代表：</p><p>一次完整浏览器任务环境。</p><hr><h1 id="三十一、为什么需要browser-extension" tabindex="-1"><a class="header-anchor" href="#三十一、为什么需要browser-extension"><span>三十一、为什么需要Browser Extension</span></a></h1><p>第一次启动时遇到：</p><pre><code>waiting for browser extension to connect
</code></pre><p>这个错误说明：</p><p>daemon存在。</p><p>但是：</p><p>浏览器侧没有连接。</p><p>原因：</p><p>BrowserSkill采用：</p><pre><code>浏览器扩展桥接模式
</code></pre><p>而不是：</p><p>直接连接任意Chrome。</p><p>结构：</p><pre><code>bsk daemon

↓

Extension

↓

Browser
</code></pre><p>Extension负责：</p><p>将浏览器能力暴露给Agent。</p><hr><h1 id="三十二、成功运行后的验证流程" tabindex="-1"><a class="header-anchor" href="#三十二、成功运行后的验证流程"><span>三十二、成功运行后的验证流程</span></a></h1><p>最终成功状态：</p><p>查看daemon：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看session：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">bsk session list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><pre><code>SESSION   BROWSER   AGENT WINDOW

upfg      xxxx      xxxx
</code></pre><p>说明：</p><p>完整链路：</p><pre><code>DSH

↓

Plugin

↓

bsk

↓

Extension

↓

Browser
</code></pre><p>已经建立。</p><hr><h1 id="三十三、agent使用规范设计" tabindex="-1"><a class="header-anchor" href="#三十三、agent使用规范设计"><span>三十三、Agent使用规范设计</span></a></h1><p>为了提高稳定性，实际使用时应该给Agent明确规则。</p><p>例如：</p><pre><code>你需要使用BrowserSkill执行浏览器任务。

执行前：

1. 检查当前session。

2. 获取页面snapshot。

3. 不要盲目点击。

4. 优先使用语义元素。

5. 遇到验证码请求人工协助。

6. 高风险操作等待确认。
</code></pre><p>这比简单告诉：</p><p>&quot;打开网页&quot;</p><p>稳定很多。</p><hr><h1 id="三十四、为什么需要human-in-the-loop" tabindex="-1"><a class="header-anchor" href="#三十四、为什么需要human-in-the-loop"><span>三十四、为什么需要Human in the Loop</span></a></h1><p>完全自动化并不是最佳目标。</p><p>真实环境中：</p><p>存在：</p><ul><li>密码；</li><li>验证码；</li><li>支付；</li><li>权限确认。</li></ul><p>因此最佳模式：</p><pre><code>AI处理80%

+

人工处理关键20%
</code></pre><p>这种模式：</p><p>既保留自动化效率，</p><p>又避免不可控风险。</p><hr><h1 id="三十五、后续工程优化方向" tabindex="-1"><a class="header-anchor" href="#三十五、后续工程优化方向"><span>三十五、后续工程优化方向</span></a></h1><h2 id="_35-1-增加任务记忆" tabindex="-1"><a class="header-anchor" href="#_35-1-增加任务记忆"><span>35.1 增加任务记忆</span></a></h2><p>当前：</p><p>Session保存短期状态。</p><p>未来可以增加：</p><p>长期任务记忆。</p><p>例如：</p><pre><code>用户常访问网站

常用操作流程

个人偏好
</code></pre><hr><h2 id="_35-2-增加视觉模型" tabindex="-1"><a class="header-anchor" href="#_35-2-增加视觉模型"><span>35.2 增加视觉模型</span></a></h2><p>当前：</p><p>主要依赖：</p><p>DOM和语义信息。</p><p>未来：</p><p>结合：</p><ul><li>Screenshot；</li><li>Vision Model；</li><li>OCR。</li></ul><p>实现：</p><p>视觉理解。</p><hr><h2 id="_35-3-多agent协作" tabindex="-1"><a class="header-anchor" href="#_35-3-多agent协作"><span>35.3 多Agent协作</span></a></h2><p>未来结构：</p><pre><code>规划Agent

↓

浏览Agent

↓

验证Agent

↓

报告Agent
</code></pre><p>形成复杂自动化系统。</p><hr><h1 id="三十六、最终工程总结" tabindex="-1"><a class="header-anchor" href="#三十六、最终工程总结"><span>三十六、最终工程总结</span></a></h1><p>整个项目不是简单安装一个浏览器插件。</p><p>它实际上完成了：</p><p>从：</p><pre><code>语言模型
</code></pre><p>到：</p><pre><code>能够操作计算环境的智能体
</code></pre><p>完整路径：</p><pre><code>LLM

↓

Agent Framework

↓

Tool Layer

↓

Browser Infrastructure

↓

Real World Environment
</code></pre><p>BrowserSkill正处于这个链路中间。</p><p>它负责连接：</p><p>AI大脑</p><p>和</p><p>互联网环境。</p><p>这也是未来Computer Use Agent发展的核心方向。</p><hr><h1 id="三十七、browserskill源码结构解析" tabindex="-1"><a class="header-anchor" href="#三十七、browserskill源码结构解析"><span>三十七、BrowserSkill源码结构解析</span></a></h1><p>前面的章节主要关注部署流程。</p><p>这一部分进一步从源码结构分析 BrowserSkill的工程设计。</p><p>完整仓库结构：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>BrowserSkill</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── apps</span></span>
<span class="line"><span>│   ├── extension</span></span>
<span class="line"><span>│   └── ...</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── crates</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── packages</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── skill</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── scripts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── Cargo.toml</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── pnpm-workspace.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体采用：</p><pre><code>Rust
+
TypeScript
+
React
+
Browser Extension
+
Agent Skill
</code></pre><p>的混合架构。</p><hr><h1 id="三十八、apps目录分析" tabindex="-1"><a class="header-anchor" href="#三十八、apps目录分析"><span>三十八、apps目录分析</span></a></h1><h2 id="_38-1-extension" tabindex="-1"><a class="header-anchor" href="#_38-1-extension"><span>38.1 extension</span></a></h2><p>核心浏览器扩展。</p><p>目录：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>apps/extension</span></span>
<span class="line"><span></span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── entrypoints</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── browser-driver</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── content</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── session-manager</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── tools</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── transport</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它负责：</p><ul><li>浏览器端通信；</li><li>页面观察；</li><li>工具执行；</li><li>Session管理。</li></ul><hr><h1 id="三十九、extension内部模块分析" tabindex="-1"><a class="header-anchor" href="#三十九、extension内部模块分析"><span>三十九、Extension内部模块分析</span></a></h1><h2 id="_39-1-browser-driver" tabindex="-1"><a class="header-anchor" href="#_39-1-browser-driver"><span>39.1 browser-driver</span></a></h2><p>该模块负责：</p><p>浏览器底层能力封装。</p><p>包括：</p><ul><li>Tab管理；</li><li>页面跳转；</li><li>元素操作；</li><li>浏览器事件。</li></ul><p>可以理解为：</p><pre><code>Agent动作

↓

Browser Driver

↓

Chrome API
</code></pre><hr><h2 id="_39-2-session-manager" tabindex="-1"><a class="header-anchor" href="#_39-2-session-manager"><span>39.2 session-manager</span></a></h2><p>Session Manager负责维护：</p><pre><code>一个Agent任务上下文
</code></pre><p>例如：</p><p>任务：</p><pre><code>完成网页测试
</code></pre><p>创建：</p><pre><code>session abc
</code></pre><p>该Session保存：</p><ul><li>当前浏览器；</li><li>当前窗口；</li><li>当前标签页；</li><li>操作状态。</li></ul><hr><h2 id="_39-3-tools目录" tabindex="-1"><a class="header-anchor" href="#_39-3-tools目录"><span>39.3 tools目录</span></a></h2><p>这是Agent调用的工具层。</p><p>对应：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>navigate</span></span>
<span class="line"><span>click</span></span>
<span class="line"><span>fill</span></span>
<span class="line"><span>screenshot</span></span>
<span class="line"><span>observe</span></span>
<span class="line"><span>snapshot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说：</p><p>模型看到的工具接口，</p><p>最终都会映射到这里。</p><hr><h1 id="四十、vom与页面理解" tabindex="-1"><a class="header-anchor" href="#四十、vom与页面理解"><span>四十、VOM与页面理解</span></a></h1><p>BrowserSkill一个重要特点：</p><p>不是只提供坐标点击。</p><p>传统自动化：</p><pre><code>点击 x=500 y=300
</code></pre><p>问题：</p><p>页面变化后失效。</p><p>BrowserSkill采用：</p><p>语义观察。</p><p>例如：</p><p>页面：</p><pre><code>&lt;button&gt;
搜索
&lt;/button&gt;
</code></pre><p>Agent看到：</p><pre><code>button ref=e12
name=搜索
</code></pre><p>然后：</p><pre><code>click e12
</code></pre><p>这种方式更加接近人类操作。</p><hr><h1 id="四十一、rust部分分析" tabindex="-1"><a class="header-anchor" href="#四十一、rust部分分析"><span>四十一、Rust部分分析</span></a></h1><p>BrowserSkill包含Rust工程：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>crates</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>主要作用：</p><h2 id="_41-1-cli" tabindex="-1"><a class="header-anchor" href="#_41-1-cli"><span>41.1 CLI</span></a></h2><p>提供：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>命令。</p><p>例如：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询daemon状态。</p><hr><h2 id="_41-2-daemon" tabindex="-1"><a class="header-anchor" href="#_41-2-daemon"><span>41.2 Daemon</span></a></h2><p>Daemon是后台服务。</p><p>作用：</p><p>保持：</p><ul><li>浏览器连接；</li><li>Session状态；</li><li>工具通信。</li></ul><p>结构：</p><pre><code>Agent

↓

bsk CLI

↓

Daemon

↓

Browser
</code></pre><hr><h1 id="四十二、pnpm-workspace设计" tabindex="-1"><a class="header-anchor" href="#四十二、pnpm-workspace设计"><span>四十二、pnpm Workspace设计</span></a></h1><p>根目录：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>pnpm-workspace.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>说明：</p><p>项目采用Monorepo。</p><p>多个package：</p><p>共享：</p><ul><li>依赖；</li><li>类型；</li><li>构建流程。</li></ul><p>优势：</p><p>大型Agent项目中：</p><p>前端、插件、工具可以统一管理。</p><hr><h1 id="四十三、wxt浏览器扩展构建流程" tabindex="-1"><a class="header-anchor" href="#四十三、wxt浏览器扩展构建流程"><span>四十三、WXT浏览器扩展构建流程</span></a></h1><p>Extension使用：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-json"><span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;wxt build&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>构建流程：</p><pre><code>TypeScript源码

↓

WXT

↓

Vite

↓

Chrome Extension

↓

manifest.json

↓

浏览器加载
</code></pre><p>因此：</p><p>源码目录：</p><pre><code>src
</code></pre><p>不能直接加载。</p><p>需要：</p><pre><code>.output
</code></pre><p>构建产物。</p><hr><h1 id="四十四、browserskill命令实战手册" tabindex="-1"><a class="header-anchor" href="#四十四、browserskill命令实战手册"><span>四十四、BrowserSkill命令实战手册</span></a></h1><p>下面整理常用bsk命令。</p><hr><h2 id="_44-1-查看帮助" tabindex="-1"><a class="header-anchor" href="#_44-1-查看帮助"><span>44.1 查看帮助</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>作用：</p><p>查看所有CLI能力。</p><p>包括：</p><ul><li>session；</li><li>window；</li><li>screenshot；</li><li>navigate；</li><li>click；</li><li>fill。</li></ul><hr><h2 id="_44-2-查看daemon状态" tabindex="-1"><a class="header-anchor" href="#_44-2-查看daemon状态"><span>44.2 查看Daemon状态</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>daemon version</span></span>
<span class="line"><span>protocol version</span></span>
<span class="line"><span>pid</span></span>
<span class="line"><span>browser connected</span></span>
<span class="line"><span>active sessions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于判断：</p><p>底层服务是否正常。</p><hr><h2 id="_44-3-session管理" tabindex="-1"><a class="header-anchor" href="#_44-3-session管理"><span>44.3 Session管理</span></a></h2><p>查看：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> session</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>包括：</p><p>启动：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>停止：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="_44-4-浏览器查看" tabindex="-1"><a class="header-anchor" href="#_44-4-浏览器查看"><span>44.4 浏览器查看</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> browsers</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看：</p><p>当前连接浏览器。</p><hr><h2 id="_44-5-页面导航" tabindex="-1"><a class="header-anchor" href="#_44-5-页面导航"><span>44.5 页面导航</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> navigate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> URL</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SESSION_ID</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> navigate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://www.baidu.com</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --session</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> upfg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="_44-6-页面截图" tabindex="-1"><a class="header-anchor" href="#_44-6-页面截图"><span>44.6 页面截图</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> screenshot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>用于：</p><p>观察当前状态。</p><hr><h2 id="_44-7-页面语义观察" tabindex="-1"><a class="header-anchor" href="#_44-7-页面语义观察"><span>44.7 页面语义观察</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> snapshot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回：</p><p>页面可操作元素。</p><p>例如：</p><pre><code>button
input
link
</code></pre><hr><h2 id="_44-8-vom观察" tabindex="-1"><a class="header-anchor" href="#_44-8-vom观察"><span>44.8 VOM观察</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bsk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> observe</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>获取：</p><p>更高级页面理解信息。</p><hr><h1 id="四十五、为什么命令设计比简单脚本更重要" tabindex="-1"><a class="header-anchor" href="#四十五、为什么命令设计比简单脚本更重要"><span>四十五、为什么命令设计比简单脚本更重要</span></a></h1><p>普通脚本：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-python"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">page.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>只能完成：</p><p>固定动作。</p><p>而CLI工具：</p><pre><code>bsk click
bsk snapshot
bsk observe
</code></pre><p>可以被：</p><p>不同Agent调用。</p><p>这体现：</p><p>工具设计思想。</p><hr><h1 id="四十六、实际网页任务执行流程" tabindex="-1"><a class="header-anchor" href="#四十六、实际网页任务执行流程"><span>四十六、实际网页任务执行流程</span></a></h1><p>一个完整任务：</p><pre><code>用户目标

↓

Agent理解

↓

snapshot页面

↓

分析元素

↓

选择动作

↓

调用bsk

↓

浏览器执行

↓

返回结果

↓

继续规划
</code></pre><p>例如：</p><p>用户：</p><pre><code>完成网站注册
</code></pre><p>Agent：</p><ol><li>打开网页；</li><li>观察页面；</li><li>填写信息；</li><li>遇到验证码；</li><li>请求人工；</li><li>继续完成。</li></ol><hr><h1 id="四十七、项目中的关键经验总结" tabindex="-1"><a class="header-anchor" href="#四十七、项目中的关键经验总结"><span>四十七、项目中的关键经验总结</span></a></h1><h2 id="_47-1-不要只关注模型能力" tabindex="-1"><a class="header-anchor" href="#_47-1-不要只关注模型能力"><span>47.1 不要只关注模型能力</span></a></h2><p>很多人认为：</p><p>Agent效果取决于LLM。</p><p>实际上：</p><p>完整能力：</p><pre><code>模型

+

工具

+

环境

+

反馈
</code></pre><p>缺一不可。</p><hr><h2 id="_47-2-浏览器agent核心不是点击" tabindex="-1"><a class="header-anchor" href="#_47-2-浏览器agent核心不是点击"><span>47.2 浏览器Agent核心不是点击</span></a></h2><p>真正困难：</p><p>不是：</p><pre><code>click()
</code></pre><p>而是：</p><pre><code>知道什么时候click

为什么click

点击后是否正确
</code></pre><p>因此：</p><p>观察能力非常重要。</p><hr><h2 id="_47-3-工程化比demo更重要" tabindex="-1"><a class="header-anchor" href="#_47-3-工程化比demo更重要"><span>47.3 工程化比Demo更重要</span></a></h2><p>一个Demo：</p><p>可以自动打开网页。</p><p>一个工程系统：</p><p>需要考虑：</p><ul><li>Session；</li><li>错误恢复；</li><li>日志；</li><li>权限；</li><li>人工介入。</li></ul><p>BrowserSkill正是在解决这些问题。</p><hr><h1 id="四十八、最终项目架构图" tabindex="-1"><a class="header-anchor" href="#四十八、最终项目架构图"><span>四十八、最终项目架构图</span></a></h1><div class="language-mermaid line-numbers-mode" data-highlighter="shiki" data-ext="mermaid" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-mermaid"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">graph TD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">A[DeepSeek Harness]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">B[BrowserSkill Plugin]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">C[bsk CLI]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D[Daemon]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">E[Browser Extension]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">F[Chrome/Edge Agent Window]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">G[网页环境]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">A --&gt; B</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">B --&gt; C</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">C --&gt; D</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D --&gt; E</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">E --&gt; F</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">F --&gt; G</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="四十九、下一阶段改造方向" tabindex="-1"><a class="header-anchor" href="#四十九、下一阶段改造方向"><span>四十九、下一阶段改造方向</span></a></h1><p>在当前基础上，可以继续扩展：</p><h2 id="浏览器自动测试平台" tabindex="-1"><a class="header-anchor" href="#浏览器自动测试平台"><span>浏览器自动测试平台</span></a></h2><p>加入：</p><ul><li>测试任务生成；</li><li>页面异常检测；</li><li>自动报告。</li></ul><hr><h2 id="企业数字员工" tabindex="-1"><a class="header-anchor" href="#企业数字员工"><span>企业数字员工</span></a></h2><p>例如：</p><p>自动：</p><ul><li>查询数据；</li><li>填写系统；</li><li>生成报表。</li></ul><hr><h2 id="personal-operator" tabindex="-1"><a class="header-anchor" href="#personal-operator"><span>Personal Operator</span></a></h2><p>最终目标：</p><pre><code>AI

↓

操作电脑

↓

完成复杂任务
</code></pre><p>这也是Computer Use Agent的发展方向。</p>`,1030)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};