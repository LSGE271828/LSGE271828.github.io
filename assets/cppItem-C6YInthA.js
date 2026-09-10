import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./app-BVk1VMq1.js";var c=JSON.parse(`{"path":"/main/cppItem.html","title":"C++全栈项目- 分布式即时通信系统","lang":"zh-CN","frontmatter":{"title":"C++全栈项目- 分布式即时通信系统","icon":"comments","date":"2026-03-11T00:00:00.000Z","category":["C++"],"tag":["C++","分布式系统"],"description":"C++全栈项目- 分布式即时通信系统 Day 01：简介 简介 本项目为C++全栈聊天项目实战，包括PC端QT界面编程，asio异步服务器设计，beast网络库搭建http网关，nodejs搭建验证服务，各服务间用grpc通信，server和client用asio通信等，也包括用户信息的录入等。实现跨平台设计，先设计windows的server，之后再...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"C++全栈项目- 分布式即时通信系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-03-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sinthome\\",\\"url\\":\\"https://github.com/LSGE271828\\"}]}"],["meta",{"property":"og:url","content":"https://LSGE271828.github.io/main/cppItem.html"}],["meta",{"property":"og:site_name","content":"Sinthome"}],["meta",{"property":"og:title","content":"C++全栈项目- 分布式即时通信系统"}],["meta",{"property":"og:description","content":"C++全栈项目- 分布式即时通信系统 Day 01：简介 简介 本项目为C++全栈聊天项目实战，包括PC端QT界面编程，asio异步服务器设计，beast网络库搭建http网关，nodejs搭建验证服务，各服务间用grpc通信，server和client用asio通信等，也包括用户信息的录入等。实现跨平台设计，先设计windows的server，之后再..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"分布式系统"}],["meta",{"property":"article:tag","content":"C++"}],["meta",{"property":"article:published_time","content":"2026-03-11T00:00:00.000Z"}]]},"git":{},"readingTime":{"minutes":109.54,"words":32861},"filePathRelative":"main/cppItem.md","excerpt":"\\n<h1>Day 01：简介</h1>\\n<h2>简介</h2>\\n<p>本项目为C++全栈聊天项目实战，包括PC端QT界面编程，asio异步服务器设计，beast网络库搭建http网关，nodejs搭建验证服务，各服务间用grpc通信，server和client用asio通信等，也包括用户信息的录入等。实现跨平台设计，先设计windows的server，之后再考虑移植到windows中。较为全面的展示C++ 在实际项目中的应用。</p>\\n<h2>架构设计</h2>\\n<p>一个概要的结构设计如下图</p>\\n<figure><a href=\\"all_images/1709009717000.jpg\\"></a><figcaption></figcaption></figure>","autoDesc":true}`),l={name:`cppItem.md`};function u(s,c,l,u,d,f){let p=t(`VPIcon`);return o(),a(`div`,null,[c[2]||=n(`<h1 id="c-全栈项目-分布式即时通信系统" tabindex="-1"><a class="header-anchor" href="#c-全栈项目-分布式即时通信系统"><span>C++全栈项目- 分布式即时通信系统</span></a></h1><h1 id="day-01-简介" tabindex="-1"><a class="header-anchor" href="#day-01-简介"><span>Day 01：简介</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>本项目为C++全栈聊天项目实战，包括PC端QT界面编程，asio异步服务器设计，beast网络库搭建http网关，nodejs搭建验证服务，各服务间用grpc通信，server和client用asio通信等，也包括用户信息的录入等。实现跨平台设计，先设计windows的server，之后再考虑移植到windows中。较为全面的展示C++ 在实际项目中的应用。</p><h2 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计"><span>架构设计</span></a></h2><p>一个概要的结构设计如下图</p><figure><a href="all_images/1709009717000.jpg"><img src="/assets/1709009717000-DBNOAFzo.jpg" alt="" tabindex="0" loading="lazy"></a><figcaption></figcaption></figure><ol><li>GateServer为网关服务，主要应对客户端的连接和注册请求，因为服务器是是分布式，所以GateServer收到用户连接请求后会查询状态服务选择一个负载较小的Server地址给客户端，客户端拿着这个地址直接和Server通信建立长连接。</li><li>当用户注册时会发送给GateServer, GateServer调用VarifyServer验证注册的合理性并发送验证码给客户端，客户端拿着这个验证码去GateServer注册即可。</li><li>StatusServer， ServerA， ServerB都可以直接访问Redis和Mysql服务。</li></ol><h2 id="创建应用" tabindex="-1"><a class="header-anchor" href="#创建应用"><span>创建应用</span></a></h2><p>先创建客户端的登录界面，先用qt创建qt application widgets</p><h2 id="创建注册界面" tabindex="-1"><a class="header-anchor" href="#创建注册界面"><span>创建注册界面</span></a></h2><p>注册界面创建方式和登录界面类似，创建的界面如下:</p><figure><a href="./all_images/1709030381543.jpg"><img src="/assets/1709030381543-HXwRAIsw.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>创建好界面后接下来在LoginDialog类声明里添加信号切换注册界面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>signals:</span></span>
<span class="line"><span>    void switchRegister();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在LoginDialog的构造函数里连接按钮点击事件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>connect(ui-&gt;reg_btn, &amp;QPushButton::clicked, this, &amp;LoginDialog::switchRegister);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>按钮点击后LoginDialog发出switchRegister信号，该信号发送给MainWindow用来切换界面。</p><p>在MainWindow里声明注册类变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>private:</span></span>
<span class="line"><span>    RegisterDialog* _reg_dlg;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在其构造函数中添加注册类对象的初始化以及连接switchRegister信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>    //创建和注册消息的链接</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchRegister,</span></span>
<span class="line"><span>            this, &amp;MainWindow::SlotSwitchReg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _reg_dlg = new RegisterDialog();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现槽函数SlotSwitchReg</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void MainWindow::SlotSwitchReg(){</span></span>
<span class="line"><span>    setCentralWidget(_reg_dlg);</span></span>
<span class="line"><span>    _login_dlg-&gt;hide();</span></span>
<span class="line"><span>    _reg_dlg-&gt;show();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样启动程序主界面优先显示登录界面，点击注册后跳转到注册界面</p><h2 id="优化样式" tabindex="-1"><a class="header-anchor" href="#优化样式"><span>优化样式</span></a></h2><p>在项目根目录下创建style文件夹，在文件夹里创建stylesheet.qss文件，然后在qt项目中的rc.qrc右键添加现有文件，选择stylesheet.qss，这样qss就被导入到项目中了。</p><p>在主程序启动后加载qss</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>int main(int argc, char *argv[])</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    QApplication a(argc, argv);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QFile qss(&quot;:/style/stylesheet.qss&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if( qss.open(QFile::ReadOnly))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        qDebug(&quot;open success&quot;);</span></span>
<span class="line"><span>        QString style = QLatin1String(qss.readAll());</span></span>
<span class="line"><span>        a.setStyleSheet(style);</span></span>
<span class="line"><span>        qss.close();</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>         qDebug(&quot;Open failed&quot;);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    MainWindow w;</span></span>
<span class="line"><span>    w.show();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return a.exec();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后写qss样式美化界面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>QDialog#LoginDialog{</span></span>
<span class="line"><span>background-color:rgb(255,255,255)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主界面有一道灰色的是toolbar造成的，去mainwindow.ui里把那个toolbar删了就行了。</p><hr><h1 id="day-02-完善注册类界面" tabindex="-1"><a class="header-anchor" href="#day-02-完善注册类界面"><span>Day 02：完善注册类界面</span></a></h1><h2 id="完善注册类界面" tabindex="-1"><a class="header-anchor" href="#完善注册类界面"><span>完善注册类界面</span></a></h2><p>先在注册类构造函数里添加lineEdit的模式为密码模式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ui-&gt;lineEdit_Passwd-&gt;setEchoMode(QLineEdit::Password);</span></span>
<span class="line"><span>ui-&gt;lineEdit_Confirm-&gt;setEchoMode(QLineEdit::Password);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册界面的ui里添加一个widget，widget内部包含一个tip居中显示，用来提示错误。设置label的显示为文字居中。</p><figure><a href="./all_images/1709103910427.jpg"><img src="/assets/1709103910427-JjAKnlPn.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在qss里添加err_tip样式，根据不同的状态做字体显示</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#err_tip[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>   color: green;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#err_tip[state=&#39;err&#39;]{</span></span>
<span class="line"><span>   color: red;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来项目中添加global.h和global.cpp文件，global.h声明repolish函数，global.cpp用来定义这个函数。</p><p>.h中的声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef GLOBAL_H</span></span>
<span class="line"><span>#define GLOBAL_H</span></span>
<span class="line"><span>#include &lt;QWidget&gt;</span></span>
<span class="line"><span>#include &lt;functional&gt;</span></span>
<span class="line"><span>#include &quot;QStyle&quot;</span></span>
<span class="line"><span>extern std::function&lt;void(QWidget*)&gt; repolish;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // GLOBAL_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.cpp中的定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>std::function&lt;void(QWidget*)&gt; repolish =[](QWidget *w){</span></span>
<span class="line"><span>    w-&gt;style()-&gt;unpolish(w);</span></span>
<span class="line"><span>    w-&gt;style()-&gt;polish(w);</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Register的构造函数中添加样式设置。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;normal&quot;);</span></span>
<span class="line"><span>repolish(ui-&gt;err_tip);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现获取验证码的逻辑,ui里关联get_code按钮的槽事件，并实现槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::on_get_code_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //验证邮箱的地址正则表达式</span></span>
<span class="line"><span>    auto email = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    // 邮箱地址的正则表达式</span></span>
<span class="line"><span>    QRegularExpression regex(R&quot;((\\w+)(\\.|_)?(\\w*)@(\\w+)(\\.(\\w+))+)&quot;);</span></span>
<span class="line"><span>    bool match = regex.match(email).hasMatch(); // 执行正则表达式匹配</span></span>
<span class="line"><span>    if(match){</span></span>
<span class="line"><span>        //发送http请求获取验证码</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        //提示邮箱不正确</span></span>
<span class="line"><span>        showTip(tr(&quot;邮箱地址不正确&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在RegisterDialog中添加showTip函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::showTip(QString str)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;err_tip-&gt;setText(str);</span></span>
<span class="line"><span>    ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;err&quot;);</span></span>
<span class="line"><span>    repolish(ui-&gt;err_tip);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，这样就完成了。测试提示功能正确，下面要实现判断邮箱正确后发送http请求。</p><h2 id="单例类封装" tabindex="-1"><a class="header-anchor" href="#单例类封装"><span>单例类封装</span></a></h2><p>网络请求类要做成一个单例类，这样方便在任何需要发送http请求的时候调用，先实现单例类,添加singleton.h实现如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;memory&gt;</span></span>
<span class="line"><span>#include &lt;mutex&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>template &lt;typename T&gt;</span></span>
<span class="line"><span>class Singleton {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    Singleton() = default;</span></span>
<span class="line"><span>    Singleton(const Singleton&lt;T&gt;&amp;) = delete;</span></span>
<span class="line"><span>    Singleton&amp; operator=(const Singleton&lt;T&gt;&amp; st) = delete;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static std::shared_ptr&lt;T&gt; _instance;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    static std::shared_ptr&lt;T&gt; GetInstance() {</span></span>
<span class="line"><span>        static std::once_flag s_flag;</span></span>
<span class="line"><span>        std::call_once(s_flag, [&amp;]() {</span></span>
<span class="line"><span>            _instance = shared_ptr&lt;T&gt;(new T);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return _instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void PrintAddress() {</span></span>
<span class="line"><span>        std::cout &lt;&lt; _instance.get() &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~Singleton() {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;this is singleton destruct&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>template &lt;typename T&gt;</span></span>
<span class="line"><span>std::shared_ptr&lt;T&gt; Singleton&lt;T&gt;::_instance = nullptr;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="http管理类" tabindex="-1"><a class="header-anchor" href="#http管理类"><span>http管理类</span></a></h2><p>http管理类主要用来管理http发送接收等请求得，需要在pro中添加网络库</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>QT       += core gui network</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在pro中添加C++类，命名为HttpMgr，然后头文件如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;singleton.h&quot;</span></span>
<span class="line"><span>#include &lt;QString&gt;</span></span>
<span class="line"><span>#include &lt;QUrl&gt;</span></span>
<span class="line"><span>#include &lt;QObject&gt;</span></span>
<span class="line"><span>#include &lt;QNetworkAccessManager&gt;</span></span>
<span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span>#include &lt;memory&gt;</span></span>
<span class="line"><span>#include &lt;QJsonObject&gt;</span></span>
<span class="line"><span>#include &lt;QJsonDocument&gt;</span></span>
<span class="line"><span>class HttpMgr:public QObject, public Singleton&lt;HttpMgr&gt;,</span></span>
<span class="line"><span>        public std::enable_shared_from_this&lt;HttpMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~HttpMgr();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    friend class Singleton&lt;HttpMgr&gt;;</span></span>
<span class="line"><span>    HttpMgr();</span></span>
<span class="line"><span>    QNetworkAccessManager _manager;</span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void sig_http_finish();</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先实现PostHttpReq请求的函数，也就是发送http的post请求, 发送请求要用到请求的url，请求的数据(json或者protobuf序列化)，以及请求的id，以及哪个模块发出的请求mod，那么一个请求接口应该是这样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void PostHttpReq(QUrl url, QJsonObject json, ReqId req_id, Modules mod);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>去global.h定义ReqId枚举类型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>enum ReqId{</span></span>
<span class="line"><span>    ID_GET_VARIFY_CODE = 1001, //获取验证码</span></span>
<span class="line"><span>    ID_REG_USER = 1002, //注册用户</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在global.h定义ErrorCodes</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>enum ErrorCodes{</span></span>
<span class="line"><span>    SUCCESS = 0,</span></span>
<span class="line"><span>    ERR_JSON = 1, //Json解析失败</span></span>
<span class="line"><span>    ERR_NETWORK = 2,</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在global.h中定义模块</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>enum Modules{</span></span>
<span class="line"><span>    REGISTERMOD = 0,</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要修改下要发送的信号，在HttpMgr的头文件里，让他携带参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void sig_http_finish(ReqId id, QString res, ErrorCodes err, Modules mod);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>实现PostHttpReq</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpMgr::PostHttpReq(QUrl url, QJsonObject json, ReqId req_id, Modules mod)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //创建一个HTTP POST请求，并设置请求头和请求体</span></span>
<span class="line"><span>    QByteArray data = QJsonDocument(json).toJson();</span></span>
<span class="line"><span>    //通过url构造请求</span></span>
<span class="line"><span>    QNetworkRequest request(url);</span></span>
<span class="line"><span>    request.setHeader(QNetworkRequest::ContentTypeHeader, &quot;application/json&quot;);</span></span>
<span class="line"><span>    request.setHeader(QNetworkRequest::ContentLengthHeader, QByteArray::number(data.length()));</span></span>
<span class="line"><span>    //发送请求，并处理响应, 获取自己的智能指针，构造伪闭包并增加智能指针引用计数</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    QNetworkReply * reply = _manager.post(request, data);</span></span>
<span class="line"><span>    //设置信号和槽等待发送完成</span></span>
<span class="line"><span>    QObject::connect(reply, &amp;QNetworkReply::finished, [reply, self, req_id, mod](){</span></span>
<span class="line"><span>        //处理错误的情况</span></span>
<span class="line"><span>        if(reply-&gt;error() != QNetworkReply::NoError){</span></span>
<span class="line"><span>            qDebug() &lt;&lt; reply-&gt;errorString();</span></span>
<span class="line"><span>            //发送信号通知完成</span></span>
<span class="line"><span>            emit self-&gt;sig_http_finish(req_id, &quot;&quot;, ErrorCodes::ERR_NETWORK, mod);</span></span>
<span class="line"><span>            reply-&gt;deleteLater();</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //无错误则读回请求</span></span>
<span class="line"><span>        QString res = reply-&gt;readAll();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //发送信号通知完成</span></span>
<span class="line"><span>        emit self-&gt;sig_http_finish(req_id, res, ErrorCodes::SUCCESS,mod);</span></span>
<span class="line"><span>        reply-&gt;deleteLater();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加下来HttpMgr内实现一个slot_http_finish的槽函数用来接收sig_http_finish信号。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpMgr::slot_http_finish(ReqId id, QString res, ErrorCodes err, Modules mod)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(mod == Modules::REGISTERMOD){</span></span>
<span class="line"><span>        //发送信号通知指定模块http响应结束</span></span>
<span class="line"><span>        emit sig_reg_mod_finish(id, res, err);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在HttpMgr.h中添加信号sig_reg_mod_finish，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class HttpMgr:public QObject, public Singleton&lt;HttpMgr&gt;,</span></span>
<span class="line"><span>        public std::enable_shared_from_this&lt;HttpMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>   //...省略</span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void sig_http_finish(ReqId id, QString res, ErrorCodes err, Modules mod);</span></span>
<span class="line"><span>    void sig_reg_mod_finish(ReqId id, QString res, ErrorCodes err);</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且在cpp文件中连接slot_http_finish和sig_http_finish.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>HttpMgr::HttpMgr()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //连接http请求和完成信号，信号槽机制保证队列消费</span></span>
<span class="line"><span>    connect(this, &amp;HttpMgr::sig_http_finish, this, &amp;HttpMgr::slot_http_finish);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册界面连接sig_reg_mod_finish信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RegisterDialog::RegisterDialog(QWidget *parent) :</span></span>
<span class="line"><span>    QDialog(parent),</span></span>
<span class="line"><span>    ui(new Ui::RegisterDialog)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //省略...</span></span>
<span class="line"><span>    connect(HttpMgr::GetInstance().get(), &amp;HttpMgr::sig_reg_mod_finish, this, &amp;RegisterDialog::slot_reg_mod_finish);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下俩实现slot_reg_mod_finish函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::slot_reg_mod_finish(ReqId id, QString res, ErrorCodes err)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(err != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>        showTip(tr(&quot;网络请求错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析 JSON 字符串,res需转化为QByteArray</span></span>
<span class="line"><span>    QJsonDocument jsonDoc = QJsonDocument::fromJson(res.toUtf8());</span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(jsonDoc.isNull()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(!jsonDoc.isObject()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QJsonObject jsonObj = jsonDoc.object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //调用对应的逻辑</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>showTip逻辑稍作修改，增加bool类型参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::showTip(QString str, bool b_ok)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(b_ok){</span></span>
<span class="line"><span>         ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;err&quot;);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;normal&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ui-&gt;err_tip-&gt;setText(str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    repolish(ui-&gt;err_tip);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册消息处理" tabindex="-1"><a class="header-anchor" href="#注册消息处理"><span>注册消息处理</span></a></h2><p>需要对RegisterDialog注册消息处理，头文件声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>QMap&lt;ReqId, std::function&lt;void(const QJsonObject&amp;)&gt;&gt; _handlers;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在RegisterDialog中添加注册消息处理的声明和定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::initHttpHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //注册获取验证码回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_GET_VARIFY_CODE, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto email = jsonObj[&quot;email&quot;].toString();</span></span>
<span class="line"><span>        showTip(tr(&quot;验证码已发送到邮箱，注意查收&quot;), true);</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;email is &quot; &lt;&lt; email ;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到slot_reg_mod_finish函数添加根据id调用函数处理对应逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::slot_reg_mod_finish(ReqId id, QString res, ErrorCodes err)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   //前面逻辑省略...</span></span>
<span class="line"><span>    //调用对应的逻辑,根据id回调。</span></span>
<span class="line"><span>    _handlers[id](jsonDoc.object());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="day-03-gateserver" tabindex="-1"><a class="header-anchor" href="#day-03-gateserver"><span>Day 03：GateServer</span></a></h1><h2 id="gateserver" tabindex="-1"><a class="header-anchor" href="#gateserver"><span>GateServer</span></a></h2><p>网关服务器主要应答客户端基本的连接请求，包括根据服务器负载情况选择合适服务器给客户端登录，注册，获取验证服务等，接收http请求并应答。</p><h2 id="boost库安装" tabindex="-1"><a class="header-anchor" href="#boost库安装"><span>boost库安装</span></a></h2><p>boost库的安装分为Windows和Linux两部分，Linux部分放在后面再讲解。因为Windows比较直观，便于编写代码，所以优先在windows平台搭建环境并编写代码，测试无误后再移植到linux。</p><p>boost官网地址：</p><p>Boost库官网<a href="https://www.boost.org/" target="_blank" rel="noopener noreferrer">https://www.boost.org/</a>，首先进入官网下载对应的Boost库文件。点击下图所示红框中Download进入下载页面。更多版本点击链接下载。</p><figure><a href="./all_images/1709188088318.jpg"><img src="/assets/1709188088318-BOLwu1Fp.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>下载好后解压, 其中booststrap.bat点击后生成编译程序</p><figure><a href="./all_images/1709189119436.jpg"><img src="/assets/1709189119436-DkV2xSCr.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>点击后，生成b2.exe，执行如下命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>.\\b2.exe install --toolset=msvc-14.2 --build-type=complete --prefix=&quot;D:\\cppsoft\\boost_1_81_0&quot; link=static runtime-link=shared threading=multi debug release</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>先逐一解释各参数含义</p><ol><li><p>install可以更改为stage, stage表示只生成库(dll和lib), install还会生成包含头文件的include目录。一般来说用stage就可以了，将生成的lib和下载的源码包的include头文件夹放到项目要用的地方即可。</p></li><li><p>toolset 指定编译器，<code>gcc</code>用来编译生成linux用的库，<code>msvc-14.2（VS2019）</code>用来编译windows使用的库。</p></li><li><p>如果选择的是install 命令，指定生成的库文件夹要用<code>--prefix</code>，如果使用的是stage命令，需要用<code>--stagedir</code>指定。</p></li><li><p><code>link</code> 表示生成动态库还是静态库，<code>static</code>表示生成lib库，<code>shared</code>表示生成dll库。</p></li><li><p><code>runtime-link</code> 表示用于指定运行时链接方式为静态库还是动态库，指定为<code>static</code>就是<code>MT</code>模式，指定<code>shared</code>就是<code>MD</code>模式。<code>MD</code> 和 <code>MT</code> 是微软 Visual C++ 编译器的选项，用于指定运行时库的链接方式。这两个选项有以下区别：</p><ul><li><code>/MD</code>：表示使用多线程 DLL（Dynamic Link Library）版本的运行时库。这意味着你的应用程序将使用动态链接的运行时库（MSVCRT.dll）。这样的设置可以减小最终可执行文件的大小，并且允许应用程序与其他使用相同运行时库版本的程序共享代码和数据。</li><li><code>/MT</code>：表示使用多线程静态库（Static Library）版本的运行时库。这意味着所有的运行时函数将被静态链接到应用程序中，使得应用程序不再依赖于动态链接的运行时库。这样可以确保应用程序在没有额外依赖的情况下独立运行，但可能会导致最终可执行文件的体积增大。</li></ul></li></ol><p>执行上述命令后就会在指定目录生成lib库了，将lib库拷贝到要使用的地方即可。</p><p>一句话简化上面的含义，就是生成的是lib库，运行时采用的md加载模式。</p><p>下面是编译界面</p><figure><a href="./all_images/1709190169393.jpg"><img src="/assets/1709190169393-FyFa7I3Y.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>编译后生成如下目录和文件, 是D盘 cppsoft目录下的boost文件夹。接下来创建项目并配置boost。</p><h2 id="配置boost" tabindex="-1"><a class="header-anchor" href="#配置boost"><span>配置boost</span></a></h2><p>打开visual studio 创建项目</p><figure><a href="./all_images/1709193315698.jpg"><img src="/assets/1709193315698-DilSbqOe.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来配置boost到项目中,右键项目选择属性，配置VC++包含目录，添加<code>D:\\cppsoft\\boost_1_81_0</code>（根据你自己的boost目录配置）</p><figure><a href="./all_images/1709193680525.jpg"><img src="/assets/1709193680525-EqStdpp9.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>再配置VC++库目录, 添加<code>D:\\cppsoft\\boost_1_81_0\\stage\\lib</code></p><figure><a href="./all_images/1709194005921.jpg"><img src="/assets/1709194005921-BNb6da1E.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>写个代码测试一下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;string&gt;</span></span>
<span class="line"><span>#include &quot;boost/lexical_cast.hpp&quot;</span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    using namespace std;</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Enter your weight: &quot;;</span></span>
<span class="line"><span>    float weight;</span></span>
<span class="line"><span>    cin &gt;&gt; weight;</span></span>
<span class="line"><span>    string gain = &quot;A 10% increase raises &quot;;</span></span>
<span class="line"><span>    string wt = boost::lexical_cast&lt;string&gt; (weight);</span></span>
<span class="line"><span>    gain = gain + wt + &quot; to &quot;;      // string operator()</span></span>
<span class="line"><span>    weight = 1.1 * weight;</span></span>
<span class="line"><span>    gain = gain + boost::lexical_cast&lt;string&gt;(weight) + &quot;.&quot;;</span></span>
<span class="line"><span>    cout &lt;&lt; gain &lt;&lt; endl;</span></span>
<span class="line"><span>    system(&quot;pause&quot;);</span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行成功，可以看到弹出了窗口</p><figure><a href="./all_images/1675233803676.jpg"><img src="/assets/1675233803676-BvUCaoMD.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="配置jsoncpp" tabindex="-1"><a class="header-anchor" href="#配置jsoncpp"><span>配置jsoncpp</span></a></h2><p>因为要用到json解析，所以选择jsoncpp来做后端json解析工作</p><p>jsoncpp下载地址：<br><a href="https://github.com/open-source-parsers/jsoncpp" target="_blank" rel="noopener noreferrer">https://github.com/open-source-parsers/jsoncpp</a><br> 官方文档：<br><a href="http://jsoncpp.sourceforge.net/old.html" target="_blank" rel="noopener noreferrer">http://jsoncpp.sourceforge.net/old.html</a></p><p>选择windows版本的下载。</p><p>下载后解压文件夹，解压后文件夹如下图<br><a href="./all_images/1684638346874.jpg"><img src="/assets/1684638346874-D_I2sjLN.jpg" alt="配图" loading="lazy"></a></p><p>然后进行编译，编译需要进入makefile文件夹下</p><figure><a href="./all_images/1684638830012.jpg"><img src="/assets/1684638830012-DXH1TWsl.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>找到jsoncpp.sln文件，用visual studio打开</p><p>点击确定升级，之后选择编译lib_json即可，可以选择编译整个解决方案。<br><a href="./all_images/1684639169065.jpg"><img src="/assets/1684639169065-CMOmiJ8o.jpg" alt="配图" loading="lazy"></a></p><p>然后配置编译属性，我想要用x64位的，所以配置编译平台为X64位，编译模式为debug模式，大家最好把release版和debug版都编译一遍。</p><p>右键lib_json属性里选择C++，再选择代码生成，之后在右侧选择运行库，选择md(release版), mdd(debug版).</p><figure><a href="./all_images/1709197886189.jpg"><img src="/assets/1709197886189-BJE3cbfG.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>编译生成后，的json库生成在项目同级目录的x64文件夹下的debug目录下<br><a href="./all_images/1684640251160.jpg"><img src="/assets/1684640251160-C0ORw4Kd.jpg" alt="配图" loading="lazy"></a></p><p>接下来在D盘cppsoft新建一个文件夹libjson，然后在其内部分别建立include和lib文件夹</p><figure><a href="./all_images/1684640531206.jpg"><img src="/assets/1684640531206-DfQ3_I5v.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>将jsoncpp-src-0.5.0源码文件夹下include文件夹里的内容copy到libjson下的include文件夹内。</p><p>将jsoncpp-src-0.5.0源码文件夹下x64位debug文件夹和Release文件夹下生成的库copy到libjson下的lib文件夹内。</p><figure><a href="./all_images/1709198276119.jpg"><img src="/assets/1709198276119-CSXwnxgw.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>生成的是mdd和md版本的库，但是名字却是mt，这个是visual studio生成的小bug先不管了。</p><p>接下来新建一个项目，在项目属性中配置jsoncpp</p><p>项目属性中，VC++包含目录设置为 D:\\cppsoft\\libjson\\include</p><p>库目录选择为 VC++库目录设置为 D:\\cppsoft\\libjson\\lib</p><figure><a href="./all_images/1684641520042.jpg"><img src="/assets/1684641520042-fCTooLC4.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>另外还要设置链接器-&gt;输入-&gt;附加依赖项里设置json_vc71_libmtd.lib</p><figure><a href="./all_images/1684641902273.jpg"><img src="/assets/1684641902273-D3rZCauf.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>写个程序测试一下json库安装的情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;json/json.h&gt;</span></span>
<span class="line"><span>#include &lt;json/value.h&gt;</span></span>
<span class="line"><span>#include &lt;json/reader.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    root[&quot;id&quot;] = 1001;</span></span>
<span class="line"><span>    root[&quot;data&quot;] = &quot;hello world&quot;;</span></span>
<span class="line"><span>    std::string request = root.toStyledString();</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;request is &quot; &lt;&lt; request &lt;&lt; std::endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Json::Value root2;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    reader.parse(request, root2);</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;msg id is &quot; &lt;&lt; root2[&quot;id&quot;] &lt;&lt; &quot; msg is &quot; &lt;&lt; root2[&quot;data&quot;] &lt;&lt; std::endl;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这段代码中，先将root序列化为字符串，再将字符串反序列化为root2.</p><p>输出如下</p><figure><a href="./all_images/1684642765063.jpg"><img src="/assets/1684642765063-D-5fH21F.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><hr><h1 id="day-04-绑定和监听连接" tabindex="-1"><a class="header-anchor" href="#day-04-绑定和监听连接"><span>Day 04：绑定和监听连接</span></a></h1><h2 id="绑定和监听连接" tabindex="-1"><a class="header-anchor" href="#绑定和监听连接"><span>绑定和监听连接</span></a></h2><p>利用visual studio创建一个空项目，项目名字为GateServer，然后按照day03的方法配置boost库和jsoncpp配置好后，添加一个新的类，名字叫CServer。添加成功后生成的CServer.h和CServer.cpp也会自动加入到项目中。</p><p>CServer类构造函数接受一个端口号，创建acceptor接受新到来的链接。</p><p>CServer.h包含必要的头文件，以及简化作用域声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;boost/beast/http.hpp&gt;</span></span>
<span class="line"><span>#include &lt;boost/beast.hpp&gt;</span></span>
<span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace beast = boost::beast;         // from &lt;boost/beast.hpp&gt;</span></span>
<span class="line"><span>namespace http = beast::http;           // from &lt;boost/beast/http.hpp&gt;</span></span>
<span class="line"><span>namespace net = boost::asio;            // from &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>using tcp = boost::asio::ip::tcp;       // from &lt;boost/asio/ip/tcp.hpp&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CServer.h中声明acceptor, 以及用于事件循环的上下文iocontext,和构造函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class CServer:public std::enable_shared_from_this&lt;CServer&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    CServer(boost::asio::io_context&amp; ioc, unsigned short&amp; port);</span></span>
<span class="line"><span>    void Start();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    tcp::acceptor  _acceptor;</span></span>
<span class="line"><span>    net::io_context&amp; _ioc;</span></span>
<span class="line"><span>    boost::asio::ip::tcp::socket   _socket;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cpp中实现构造函数如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>CServer::CServer(boost::asio::io_context&amp; ioc, unsigned short&amp; port) :_ioc(ioc),</span></span>
<span class="line"><span>_acceptor(ioc, tcp::endpoint(tcp::v4(), port)),_socket(ioc) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现Start函数，用来监听新链接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CServer::Start()</span></span>
<span class="line"><span>{    </span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    _acceptor.async_accept(_socket, [self](beast::error_code ec) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //出错则放弃这个连接，继续监听新链接</span></span>
<span class="line"><span>            if (ec) {</span></span>
<span class="line"><span>                self-&gt;Start();</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //处理新链接，创建HpptConnection类管理新连接</span></span>
<span class="line"><span>            std::make_shared&lt;HttpConnection&gt;(std::move(self-&gt;_socket))-&gt;Start();</span></span>
<span class="line"><span>            //继续监听</span></span>
<span class="line"><span>            self-&gt;Start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (std::exception&amp; exp) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;exception is &quot; &lt;&lt; exp.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>            self-&gt;Start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start函数内创建HttpConnection类型智能指针，将_socket内部数据转移给HttpConnection管理，_socket继续用来接受写的链接。</p><p>创建const.h将文件件和一些作用于声明放在const.h里，这样以后创建的文件包含这个const.h即可，不用写那么多头文件了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;boost/beast/http.hpp&gt;</span></span>
<span class="line"><span>#include &lt;boost/beast.hpp&gt;</span></span>
<span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace beast = boost::beast;         // from &lt;boost/beast.hpp&gt;</span></span>
<span class="line"><span>namespace http = beast::http;           // from &lt;boost/beast/http.hpp&gt;</span></span>
<span class="line"><span>namespace net = boost::asio;            // from &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>using tcp = boost::asio::ip::tcp;       // from &lt;boost/asio/ip/tcp.hpp&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建HttpConnection类文件，在头文件添加声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HttpConnection: public std::enable_shared_from_this&lt;HttpConnection&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class LogicSystem;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    HttpConnection(tcp::socket socket);</span></span>
<span class="line"><span>    void Start();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    void CheckDeadline();</span></span>
<span class="line"><span>    void WriteResponse();</span></span>
<span class="line"><span>    void HandleReq();</span></span>
<span class="line"><span>    tcp::socket  _socket;</span></span>
<span class="line"><span>    // The buffer for performing reads.</span></span>
<span class="line"><span>    beast::flat_buffer  _buffer{ 8192 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The request message.</span></span>
<span class="line"><span>    http::request&lt;http::dynamic_body&gt; _request;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The response message.</span></span>
<span class="line"><span>    http::response&lt;http::dynamic_body&gt; _response;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // The timer for putting a deadline on connection processing.</span></span>
<span class="line"><span>    net::steady_timer deadline_{</span></span>
<span class="line"><span>        _socket.get_executor(), std::chrono::seconds(60) };</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_buffer 用来接受数据</p><p>_request 用来解析请求</p><p>_response 用来回应客户端</p><p>_deadline 用来做定时器判断请求是否超时</p><p>实现HttpConnection构造函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>HttpConnection::HttpConnection(tcp::socket socket)</span></span>
<span class="line"><span>    : _socket(std::move(socket)) {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,177),r(`p`,null,[c[0]||=e(`考虑在HttpConnection`,-1),i(p,{icon:`Start内部调用http`}),c[1]||=e(`async_read函数，其源码为`,-1)]),c[3]||=n(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>async_read(</span></span>
<span class="line"><span>    AsyncReadStream&amp; stream,</span></span>
<span class="line"><span>    DynamicBuffer&amp; buffer,</span></span>
<span class="line"><span>    basic_parser&lt;isRequest&gt;&amp; parser,</span></span>
<span class="line"><span>    ReadHandler&amp;&amp; handler)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个参数为异步可读的数据流，大家可以理解为socket.</p><p>第二个参数为一个buffer，用来存储接受的数据，因为http可接受文本，图像，音频等多种资源文件，所以是Dynamic动态类型的buffer。</p><p>第三个参数是请求参数，一般也要传递能接受多种资源类型的请求参数。</p><p>第四个参数为回调函数，接受成功或者失败，都会触发回调函数，用lambda表达式就可以了。</p><p>已经将1,2,3这几个参数写到HttpConnection类的成员声明里了</p><p>实现HttpConnection的Start函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::Start()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    http::async_read(_socket, _buffer, _request, [self](beast::error_code ec,</span></span>
<span class="line"><span>        std::size_t bytes_transferred) {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                if (ec) {</span></span>
<span class="line"><span>                    std::cout &lt;&lt; &quot;http read err is &quot; &lt;&lt; ec.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>                    return;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                //处理读到的数据</span></span>
<span class="line"><span>                boost::ignore_unused(bytes_transferred);</span></span>
<span class="line"><span>                self-&gt;HandleReq();</span></span>
<span class="line"><span>                self-&gt;CheckDeadline();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            catch (std::exception&amp; exp) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;exception is &quot; &lt;&lt; exp.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现HandleReq</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::HandleReq() {</span></span>
<span class="line"><span>    //设置版本</span></span>
<span class="line"><span>    _response.version(_request.version());</span></span>
<span class="line"><span>    //设置为短链接</span></span>
<span class="line"><span>    _response.keep_alive(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (_request.method() == http::verb::get) {</span></span>
<span class="line"><span>        bool success = LogicSystem::GetInstance()-&gt;HandleGet(_request.target(), shared_from_this());</span></span>
<span class="line"><span>        if (!success) {</span></span>
<span class="line"><span>            _response.result(http::status::not_found);</span></span>
<span class="line"><span>            _response.set(http::field::content_type, &quot;text/plain&quot;);</span></span>
<span class="line"><span>            beast::ostream(_response.body()) &lt;&lt; &quot;url not found\\r\\n&quot;;</span></span>
<span class="line"><span>            WriteResponse();</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        _response.result(http::status::ok);</span></span>
<span class="line"><span>        _response.set(http::field::server, &quot;GateServer&quot;);</span></span>
<span class="line"><span>        WriteResponse();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便先实现Get请求的处理，根据请求类型为get调用LogicSystem的HandleGet接口处理get请求，根据处理成功还是失败回应数据包给对方。</p><p>先实现LogicSystem，采用单例模式，单例基类之前讲解过了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;memory&gt;</span></span>
<span class="line"><span>#include &lt;mutex&gt;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>template &lt;typename T&gt;</span></span>
<span class="line"><span>class Singleton {</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    Singleton() = default;</span></span>
<span class="line"><span>    Singleton(const Singleton&lt;T&gt;&amp;) = delete;</span></span>
<span class="line"><span>    Singleton&amp; operator=(const Singleton&lt;T&gt;&amp; st) = delete;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    static std::shared_ptr&lt;T&gt; _instance;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    static std::shared_ptr&lt;T&gt; GetInstance() {</span></span>
<span class="line"><span>        static std::once_flag s_flag;</span></span>
<span class="line"><span>        std::call_once(s_flag, [&amp;]() {</span></span>
<span class="line"><span>            _instance = shared_ptr&lt;T&gt;(new T);</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return _instance;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    void PrintAddress() {</span></span>
<span class="line"><span>        std::cout &lt;&lt; _instance.get() &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ~Singleton() {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;this is singleton destruct&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>template &lt;typename T&gt;</span></span>
<span class="line"><span>std::shared_ptr&lt;T&gt; Singleton&lt;T&gt;::_instance = nullptr;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现LogicSystem单例类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;Singleton.h&quot;</span></span>
<span class="line"><span>#include &lt;functional&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class HttpConnection;</span></span>
<span class="line"><span>typedef std::function&lt;void(std::shared_ptr&lt;HttpConnection&gt;)&gt; HttpHandler;</span></span>
<span class="line"><span>class LogicSystem :public Singleton&lt;LogicSystem&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class Singleton&lt;LogicSystem&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~LogicSystem();</span></span>
<span class="line"><span>    bool HandleGet(std::string, std::shared_ptr&lt;HttpConnection&gt;);</span></span>
<span class="line"><span>    void RegGet(std::string, HttpHandler handler);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    LogicSystem();</span></span>
<span class="line"><span>    std::map&lt;std::string, HttpHandler&gt; _post_handlers;</span></span>
<span class="line"><span>    std::map&lt;std::string, HttpHandler&gt; _get_handlers;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_post_handlers和_get_handlers分别是post请求和get请求的回调函数map，key为路由，value为回调函数。</p><p>实现RegGet函数，接受路由和回调函数作为参数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LogicSystem::RegGet(std::string url, HttpHandler handler) {</span></span>
<span class="line"><span>    _get_handlers.insert(make_pair(url, handler));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在构造函数中实现具体的消息注册</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LogicSystem::LogicSystem() {</span></span>
<span class="line"><span>    RegGet(&quot;/get_test&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; &quot;receive get_test req&quot;;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为防止互相引用，以及LogicSystem能够成功访问HttpConnection，在LogicSystem.cpp中包含HttpConnection头文件</p><p>并且在HttpConnection中添加友元类LogicSystem, 且在HttpConnection.cpp中包含LogicSystem.h文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool LogicSystem::HandleGet(std::string path, std::shared_ptr&lt;HttpConnection&gt; con) {</span></span>
<span class="line"><span>    if (_get_handlers.find(path) == _get_handlers.end()) {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _get_handlers[path](con);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样在HttpConnection里实现WriteResponse函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::WriteResponse() {</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    _response.content_length(_response.body().size());</span></span>
<span class="line"><span>    http::async_write(</span></span>
<span class="line"><span>        _socket,</span></span>
<span class="line"><span>        _response,</span></span>
<span class="line"><span>        [self](beast::error_code ec, std::size_t)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            self-&gt;_socket.shutdown(tcp::socket::shutdown_send, ec);</span></span>
<span class="line"><span>            self-&gt;deadline_.cancel();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为http是短链接，所以发送完数据后不需要再监听对方链接，直接断开发送端即可。</p><p>另外，http处理请求需要有一个时间约束，发送的数据包不能超时。所以在发送时启动一个定时器，收到发送的回调后取消定时器。</p><p>实现检测超时的函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::CheckDeadline() {</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    deadline_.async_wait(</span></span>
<span class="line"><span>        [self](beast::error_code ec)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (!ec)</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                // Close socket to cancel any outstanding operation.</span></span>
<span class="line"><span>                self-&gt;_socket.close(ec);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主函数中初始化上下文iocontext以及启动信号监听ctr-c退出事件， 并且启动iocontext服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    try</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        unsigned short port = static_cast&lt;unsigned short&gt;(8080);</span></span>
<span class="line"><span>        net::io_context ioc{ 1 };</span></span>
<span class="line"><span>        boost::asio::signal_set signals(ioc, SIGINT, SIGTERM);</span></span>
<span class="line"><span>        signals.async_wait([&amp;ioc](const boost::system::error_code&amp; error, int signal_number) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (error) {</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            ioc.stop();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        std::make_shared&lt;CServer&gt;(ioc, port)-&gt;Start();</span></span>
<span class="line"><span>        ioc.run();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (std::exception const&amp; e)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;Error: &quot; &lt;&lt; e.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`</span></span>
<span class="line"><span>启动服务器，在浏览器输入\`http://localhost:8080/get_test\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>会看到服务器回包\`receive get_test req\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果输入带参数的url请求\`http://localhost:8080/get_test?key1=value1&amp;key2=value2\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>会收到服务器反馈\`url not found\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>所以对于get请求带参数的情况要实现参数解析，可以自己实现简单的url解析函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\` cpp</span></span>
<span class="line"><span>//char 转为16进制</span></span>
<span class="line"><span>unsigned char ToHex(unsigned char x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return  x &gt; 9 ? x + 55 : x + 48;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将十进制的char转为16进制，如果是数字不超过9则加48转为对应的ASCII码的值</p><p>如果字符是大于9的，比如A~Z, a~z等则加55，获取到对应字符的ASCII码值</p><p>详细的ASCII码表大家可以看这个<a href="https://c.biancheng.net/c/ascii/" target="_blank" rel="noopener noreferrer">https://c.biancheng.net/c/ascii/</a></p><p>接下来实现从16进制转为十进制的char的方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>unsigned char FromHex(unsigned char x)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    unsigned char y;</span></span>
<span class="line"><span>    if (x &gt;= &#39;A&#39; &amp;&amp; x &lt;= &#39;Z&#39;) y = x - &#39;A&#39; + 10;</span></span>
<span class="line"><span>    else if (x &gt;= &#39;a&#39; &amp;&amp; x &lt;= &#39;z&#39;) y = x - &#39;a&#39; + 10;</span></span>
<span class="line"><span>    else if (x &gt;= &#39;0&#39; &amp;&amp; x &lt;= &#39;9&#39;) y = x - &#39;0&#39;;</span></span>
<span class="line"><span>    else assert(0);</span></span>
<span class="line"><span>    return y;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现url编码工作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::string UrlEncode(const std::string&amp; str)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    std::string strTemp = &quot;&quot;;</span></span>
<span class="line"><span>    size_t length = str.length();</span></span>
<span class="line"><span>    for (size_t i = 0; i &lt; length; i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //判断是否仅有数字和字母构成</span></span>
<span class="line"><span>        if (isalnum((unsigned char)str[i]) ||</span></span>
<span class="line"><span>            (str[i] == &#39;-&#39;) ||</span></span>
<span class="line"><span>            (str[i] == &#39;_&#39;) ||</span></span>
<span class="line"><span>            (str[i] == &#39;.&#39;) ||</span></span>
<span class="line"><span>            (str[i] == &#39;~&#39;))</span></span>
<span class="line"><span>            strTemp += str[i];</span></span>
<span class="line"><span>        else if (str[i] == &#39; &#39;) //为空字符</span></span>
<span class="line"><span>            strTemp += &quot;+&quot;;</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            //其他字符需要提前加%并且高四位和低四位分别转为16进制</span></span>
<span class="line"><span>            strTemp += &#39;%&#39;;</span></span>
<span class="line"><span>            strTemp += ToHex((unsigned char)str[i] &gt;&gt; 4);</span></span>
<span class="line"><span>            strTemp += ToHex((unsigned char)str[i] &amp; 0x0F);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return strTemp;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先判断str[i]是否为字母或者数字，或者一些简单的下划线，如果是泽直接拼接，否则判断是否为空字符，如果为空则换成&#39;+&#39;拼接。否则就是特殊字符，需要将特殊字符转化为&#39;%&#39;和两个十六进制字符拼接。现拼接&#39;%&#39;，再将字符的高四位拼接到strTemp上，最后将低四位拼接到strTemp上。</p><p>url解码的工作正好相反</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::string UrlDecode(const std::string&amp; str)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    std::string strTemp = &quot;&quot;;</span></span>
<span class="line"><span>    size_t length = str.length();</span></span>
<span class="line"><span>    for (size_t i = 0; i &lt; length; i++)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        //还原+为空</span></span>
<span class="line"><span>        if (str[i] == &#39;+&#39;) strTemp += &#39; &#39;;</span></span>
<span class="line"><span>        //遇到%将后面的两个字符从16进制转为char再拼接</span></span>
<span class="line"><span>        else if (str[i] == &#39;%&#39;)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            assert(i + 2 &lt; length);</span></span>
<span class="line"><span>            unsigned char high = FromHex((unsigned char)str[++i]);</span></span>
<span class="line"><span>            unsigned char low = FromHex((unsigned char)str[++i]);</span></span>
<span class="line"><span>            strTemp += high * 16 + low;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else strTemp += str[i];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return strTemp;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现get请求的参数解析, 在HttpConnection里添加两个成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::string _get_url;</span></span>
<span class="line"><span>std::unordered_map&lt;std::string, std::string&gt; _get_params;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::PreParseGetParam() {</span></span>
<span class="line"><span>    // 提取 URI  </span></span>
<span class="line"><span>    auto uri = _request.target();</span></span>
<span class="line"><span>    // 查找查询字符串的开始位置（即 &#39;?&#39; 的位置）  </span></span>
<span class="line"><span>    auto query_pos = uri.find(&#39;?&#39;);</span></span>
<span class="line"><span>    if (query_pos == std::string::npos) {</span></span>
<span class="line"><span>        _get_url = uri;</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _get_url = uri.substr(0, query_pos);</span></span>
<span class="line"><span>    std::string query_string = uri.substr(query_pos + 1);</span></span>
<span class="line"><span>    std::string key;</span></span>
<span class="line"><span>    std::string value;</span></span>
<span class="line"><span>    size_t pos = 0;</span></span>
<span class="line"><span>    while ((pos = query_string.find(&#39;&amp;&#39;)) != std::string::npos) {</span></span>
<span class="line"><span>        auto pair = query_string.substr(0, pos);</span></span>
<span class="line"><span>        size_t eq_pos = pair.find(&#39;=&#39;);</span></span>
<span class="line"><span>        if (eq_pos != std::string::npos) {</span></span>
<span class="line"><span>            key = UrlDecode(pair.substr(0, eq_pos)); // 假设有 url_decode 函数来处理URL解码  </span></span>
<span class="line"><span>            value = UrlDecode(pair.substr(eq_pos + 1));</span></span>
<span class="line"><span>            _get_params[key] = value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        query_string.erase(0, pos + 1);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 处理最后一个参数对（如果没有 &amp; 分隔符）  </span></span>
<span class="line"><span>    if (!query_string.empty()) {</span></span>
<span class="line"><span>        size_t eq_pos = query_string.find(&#39;=&#39;);</span></span>
<span class="line"><span>        if (eq_pos != std::string::npos) {</span></span>
<span class="line"><span>            key = UrlDecode(query_string.substr(0, eq_pos));</span></span>
<span class="line"><span>            value = UrlDecode(query_string.substr(eq_pos + 1));</span></span>
<span class="line"><span>            _get_params[key] = value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HttpConnection::HandleReq函数略作修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::HandleReq() {</span></span>
<span class="line"><span>    //...省略</span></span>
<span class="line"><span>    if (_request.method() == http::verb::get) {</span></span>
<span class="line"><span>        PreParseGetParam();</span></span>
<span class="line"><span>        bool success = LogicSystem::GetInstance()-&gt;HandleGet(_get_url, shared_from_this());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //...省略</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改LogicSytem构造函数，在get_test的回调里返回参数给对端</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LogicSystem::LogicSystem() {</span></span>
<span class="line"><span>    RegGet(&quot;/get_test&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; &quot;receive get_test req &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        int i = 0;</span></span>
<span class="line"><span>        for (auto&amp; elem : connection-&gt;_get_params) {</span></span>
<span class="line"><span>            i++;</span></span>
<span class="line"><span>            beast::ostream(connection-&gt;_response.body()) &lt;&lt; &quot;param&quot; &lt;&lt; i &lt;&lt; &quot; key is &quot; &lt;&lt; elem.first;</span></span>
<span class="line"><span>            beast::ostream(connection-&gt;_response.body()) &lt;&lt; &quot;, &quot; &lt;&lt;  &quot; value is &quot; &lt;&lt; elem.second &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器输入<code>http://localhost:8080/get_test?key1=value1&amp;key2=value2</code></p><p>看到浏览器收到如下图信息，说明的get请求逻辑处理完了</p><figure><a href="./all_images/1710148646788.jpg"><img src="/assets/1710148646788-BT2SEMjh.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><hr><h1 id="day-05-注册post请求" tabindex="-1"><a class="header-anchor" href="#day-05-注册post请求"><span>Day 05：注册Post请求</span></a></h1><h2 id="注册post请求" tabindex="-1"><a class="header-anchor" href="#注册post请求"><span>注册Post请求</span></a></h2><p>实现RegPost函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LogicSystem::RegPost(std::string url, HttpHandler handler) {</span></span>
<span class="line"><span>    _post_handlers.insert(make_pair(url, handler));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在const.h中添加ErrorCodes定义并且包含JsonCpp相关的头文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;json/json.h&gt;</span></span>
<span class="line"><span>#include &lt;json/value.h&gt;</span></span>
<span class="line"><span>#include &lt;json/reader.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>enum ErrorCodes {</span></span>
<span class="line"><span>    Success = 0,</span></span>
<span class="line"><span>    Error_Json = 1001,  //Json解析错误</span></span>
<span class="line"><span>    RPCFailed = 1002,  //RPC请求错误</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在LogicSystem的构造函数里添加获取验证码的处理逻辑，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RegPost(&quot;/get_varifycode&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto email = src_root[&quot;email&quot;].asString();</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;email is &quot; &lt;&lt; email &lt;&lt; endl;</span></span>
<span class="line"><span>    root[&quot;error&quot;] = 0;</span></span>
<span class="line"><span>    root[&quot;email&quot;] = src_root[&quot;email&quot;];</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在LogicSystem中添加Post请求的处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool LogicSystem::HandlePost(std::string path, std::shared_ptr&lt;HttpConnection&gt; con) {</span></span>
<span class="line"><span>    if (_post_handlers.find(path) == _post_handlers.end()) {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _post_handlers[path](con);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在HttpConnection的HandleReq中添加post请求处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpConnection::HandleReq() {</span></span>
<span class="line"><span>    //省略...</span></span>
<span class="line"><span>    if (_request.method() == http::verb::post) {</span></span>
<span class="line"><span>        bool success = LogicSystem::GetInstance()-&gt;HandlePost(_request.target(), shared_from_this());</span></span>
<span class="line"><span>        if (!success) {</span></span>
<span class="line"><span>            _response.result(http::status::not_found);</span></span>
<span class="line"><span>            _response.set(http::field::content_type, &quot;text/plain&quot;);</span></span>
<span class="line"><span>            beast::ostream(_response.body()) &lt;&lt; &quot;url not found\\r\\n&quot;;</span></span>
<span class="line"><span>            WriteResponse();</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        _response.result(http::status::ok);</span></span>
<span class="line"><span>        _response.set(http::field::server, &quot;GateServer&quot;);</span></span>
<span class="line"><span>        WriteResponse();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后启动服务器，然后下载postman</p><p>打开postman，将请求修改为post</p><figure><a href="./all_images/1710163652661.png"><img src="/assets/1710163652661-DG7lDXre.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>绿色的为post请求的json参数，红色的为服务器返回的json数据包。</p><p>看服务器打印的日志</p><figure><a href="./all_images/1710164199348.jpg"><img src="/assets/1710164199348-7rBQmkmD.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="客户端增加post逻辑" tabindex="-1"><a class="header-anchor" href="#客户端增加post逻辑"><span>客户端增加post逻辑</span></a></h2><p>之前在客户端实现了httpmgr的post请求，在点击获取验证码的槽函数里添加发送http的post请求即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::on_get_code_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //验证邮箱的地址正则表达式</span></span>
<span class="line"><span>    auto email = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    // 邮箱地址的正则表达式</span></span>
<span class="line"><span>    QRegularExpression regex(R&quot;((\\w+)(\\.|_)?(\\w*)@(\\w+)(\\.(\\w+))+)&quot;);</span></span>
<span class="line"><span>    bool match = regex.match(email).hasMatch(); // 执行正则表达式匹配</span></span>
<span class="line"><span>    if(match){</span></span>
<span class="line"><span>        //发送http请求获取验证码</span></span>
<span class="line"><span>        QJsonObject json_obj;</span></span>
<span class="line"><span>        json_obj[&quot;email&quot;] = email;</span></span>
<span class="line"><span>        HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(&quot;http://localhost:8080/get_varifycode&quot;),</span></span>
<span class="line"><span>                     json_obj, ReqId::ID_GET_VARIFY_CODE,Modules::REGISTERMOD);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        //提示邮箱不正确</span></span>
<span class="line"><span>        showTip(tr(&quot;邮箱地址不正确&quot;),false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当服务器不启动，客户端输入邮箱，点击获取验证码，客户端会收到网络连接失败的提示</p><figure><a href="./all_images/1710209670231.jpg"><img src="/assets/1710209670231-DbG7IqBg.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>启动服务器后，再次获取验证码，就显示正确提示了，而且客户端输出了服务器回传的邮箱地址<code>email is &quot;secondtonone1@163.com&quot;</code>，界面也刷新为正确显示</p><figure><a href="./all_images/1710210157771.jpg"><img src="/assets/1710210157771-DSa_v-cu.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="客户端配置管理" tabindex="-1"><a class="header-anchor" href="#客户端配置管理"><span>客户端配置管理</span></a></h2><p>发现客户端代码中很多参数都是写死的，最好通过配置文件管理，在代码所在目录中新建一个config.ini文件, 内部添加配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[GateServer]</span></span>
<span class="line"><span>host=localhost</span></span>
<span class="line"><span>port=8080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着右键项目添加现有文件config.ini即可加入项目中。</p><p>因为的程序最终会输出的bin目录，所以在pro中添加拷贝脚本将配置也拷贝到bin目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>win32:CONFIG(release, debug | release)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    #指定要拷贝的文件目录为工程目录下release目录下的所有dll、lib文件，例如工程目录在D:\\QT\\Test</span></span>
<span class="line"><span>    #PWD就为D:/QT/Test，DllFile = D:/QT/Test/release/*.dll</span></span>
<span class="line"><span>    TargetConfig = $\${PWD}/config.ini</span></span>
<span class="line"><span>    #将输入目录中的&quot;/&quot;替换为&quot;\\&quot;</span></span>
<span class="line"><span>    TargetConfig = $$replace(TargetConfig, /, \\\\)</span></span>
<span class="line"><span>    #将输出目录中的&quot;/&quot;替换为&quot;\\&quot;</span></span>
<span class="line"><span>    OutputDir =  $\${OUT_PWD}/$\${DESTDIR}</span></span>
<span class="line"><span>    OutputDir = $$replace(OutputDir, /, \\\\)</span></span>
<span class="line"><span>    //执行copy命令</span></span>
<span class="line"><span>    QMAKE_POST_LINK += copy /Y \\&quot;$$TargetConfig\\&quot; \\&quot;$$OutputDir\\&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>global.h中添加声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>extern QString gate_url_prefix;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在cpp中添加定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>QString gate_url_prefix = &quot;&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在main函数中添加解析配置的逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 获取当前应用程序的路径</span></span>
<span class="line"><span>QString app_path = QCoreApplication::applicationDirPath();</span></span>
<span class="line"><span>// 拼接文件名</span></span>
<span class="line"><span>QString fileName = &quot;config.ini&quot;;</span></span>
<span class="line"><span>QString config_path = QDir::toNativeSeparators(app_path +</span></span>
<span class="line"><span>                        QDir::separator() + fileName);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QSettings settings(config_path, QSettings::IniFormat);</span></span>
<span class="line"><span>QString gate_host = settings.value(&quot;GateServer/host&quot;).toString();</span></span>
<span class="line"><span>QString gate_port = settings.value(&quot;GateServer/port&quot;).toString();</span></span>
<span class="line"><span>gate_url_prefix = &quot;http://&quot;+gate_host+&quot;:&quot;+gate_port;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将RegisterDialog发送post请求修改为</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span> HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/get_varifycode&quot;),</span></span>
<span class="line"><span>                     json_obj, ReqId::ID_GET_VARIFY_CODE,Modules::REGISTERMOD);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试仍旧可以收到服务器回馈的http包。</p><p>这么做的好处就是客户端增加了配置，而且以后修改参数也方便。</p><h1 id="day-06-grpc简介" tabindex="-1"><a class="header-anchor" href="#day-06-grpc简介"><span>Day 06：grpc简介</span></a></h1><h2 id="grpc简介" tabindex="-1"><a class="header-anchor" href="#grpc简介"><span>grpc简介</span></a></h2><p>gRPC是Google开发的一种高性能、开源的远程过程调用（RPC）框架。它可以让客户端应用程序像调用本地服务一样轻松地调用远程服务，并提供了多种语言的支持，如C++、Java、Python、Go等。</p><p>gRPC使用Protocol Buffers作为数据格式，可以在不同的平台上进行应用程序之间的通信，支持多种编程语言和多种操作系统。它采用基于HTTP/2的协议，提供了高效、快速且可扩展的远程调用功能，并带有负载均衡、认证、监控等功能，方便用户管理和维护分布式系统。</p><p>gRPC可用于构建各种类型的分布式应用程序，如微服务、云原生应用程序、大规模Web应用程序、移动应用程序等场景。由于其高性能和可扩展性，越来越多的企业和组织开始采用gRPC来构建他们的应用程序和服务。</p><h2 id="grpc下载" tabindex="-1"><a class="header-anchor" href="#grpc下载"><span>grpc下载</span></a></h2><p>由于国内环境，grpc下载极其困难，grpc项目在github上，源码地址为<a href="https://github.com/grpc/grpc" target="_blank" rel="noopener noreferrer">https://github.com/grpc/grpc</a>,可以通过如下命令克隆grpc源码进行编译</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>git clone https://github.com/grpc/grpc.git </span></span>
<span class="line"><span>git submodule update  --init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是国内网络环境执行<code>submodule update</code>时会失败,所以可以用国内的代码管理工具gitee进行克隆。<br> 注意,目前在Gitee上只能找到gRPC依赖的部分&quot;官方&quot;镜像仓库,网友提供的镜像仓库较旧,因而只能构造v1.34.0版本.通过上述指令可以将v1.34.0版本的gRPC代码下载到grpc目录.<br> 选择一个稳定的分支进行克隆</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>git clone -b v1.34.0 https://gitee.com/mirrors/grpc-framework.git grpc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>克隆之后，进入grpc文件夹，修改<code>.gitmodules</code>内仓库地址，修改前<code>.gitmodules</code>内容是这样的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[submodule &quot;third_party/zlib&quot;]</span></span>
<span class="line"><span>    path = third_party/zlib</span></span>
<span class="line"><span>    #url = https://github.com/madler/zlib</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/zlib.git</span></span>
<span class="line"><span>    # When using CMake to build, the zlib submodule ends up with a</span></span>
<span class="line"><span>    # generated file that makes Git consider the submodule dirty. This</span></span>
<span class="line"><span>    # state can be ignored for day-to-day development on gRPC.</span></span>
<span class="line"><span>    ignore = dirty</span></span>
<span class="line"><span>[submodule &quot;third_party/protobuf&quot;]</span></span>
<span class="line"><span>    path = third_party/protobuf</span></span>
<span class="line"><span>    #url = https://github.com/google/protobuf.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/protobuf.git</span></span>
<span class="line"><span>[submodule &quot;third_party/googletest&quot;]</span></span>
<span class="line"><span>    path = third_party/googletest</span></span>
<span class="line"><span>    #url = https://github.com/google/googletest.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/googletest.git</span></span>
<span class="line"><span>[submodule &quot;third_party/benchmark&quot;]</span></span>
<span class="line"><span>    path = third_party/benchmark</span></span>
<span class="line"><span>    #url = https://github.com/google/benchmark</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/google-benchmark.git</span></span>
<span class="line"><span>[submodule &quot;third_party/boringssl-with-bazel&quot;]</span></span>
<span class="line"><span>    path = third_party/boringssl-with-bazel</span></span>
<span class="line"><span>    #url = https://github.com/google/boringssl.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/boringssl.git</span></span>
<span class="line"><span>[submodule &quot;third_party/re2&quot;]</span></span>
<span class="line"><span>    path = third_party/re2</span></span>
<span class="line"><span>    #url = https://github.com/google/re2.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/re2.git</span></span>
<span class="line"><span>[submodule &quot;third_party/cares/cares&quot;]</span></span>
<span class="line"><span>    path = third_party/cares/cares</span></span>
<span class="line"><span>    #url = https://github.com/c-ares/c-ares.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/c-ares.git</span></span>
<span class="line"><span>    branch = cares-1_12_0</span></span>
<span class="line"><span>[submodule &quot;third_party/bloaty&quot;]</span></span>
<span class="line"><span>    path = third_party/bloaty</span></span>
<span class="line"><span>    #url = https://github.com/google/bloaty.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/bloaty.git</span></span>
<span class="line"><span>[submodule &quot;third_party/abseil-cpp&quot;]</span></span>
<span class="line"><span>    path = third_party/abseil-cpp</span></span>
<span class="line"><span>    #url = https://github.com/abseil/abseil-cpp.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/abseil-cpp.git</span></span>
<span class="line"><span>    branch = lts_2020_02_25</span></span>
<span class="line"><span>[submodule &quot;third_party/envoy-api&quot;]</span></span>
<span class="line"><span>    path = third_party/envoy-api</span></span>
<span class="line"><span>    #url = https://github.com/envoyproxy/data-plane-api.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/data-plane-api.git</span></span>
<span class="line"><span>[submodule &quot;third_party/googleapis&quot;]</span></span>
<span class="line"><span>    path = third_party/googleapis</span></span>
<span class="line"><span>    #url = https://github.com/googleapis/googleapis.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/googleapis.git</span></span>
<span class="line"><span>[submodule &quot;third_party/protoc-gen-validate&quot;]</span></span>
<span class="line"><span>    path = third_party/protoc-gen-validate</span></span>
<span class="line"><span>    #url = https://github.com/envoyproxy/protoc-gen-validate.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/protoc-gen-validate.git</span></span>
<span class="line"><span>[submodule &quot;third_party/udpa&quot;]</span></span>
<span class="line"><span>    path = third_party/udpa</span></span>
<span class="line"><span>    #url = https://github.com/cncf/udpa.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/udpa.git</span></span>
<span class="line"><span>[submodule &quot;third_party/libuv&quot;]</span></span>
<span class="line"><span>    path = third_party/libuv</span></span>
<span class="line"><span>    #url = https://github.com/libuv/libuv.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/libuv.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gRPC的依赖是通过git的submodules来关联的,代码下载下来之后可以看到.gitmodules文件,内部的git仓库地址都需要替换成Gitee的,例如:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[submodule &quot;third_party/zlib&quot;]</span></span>
<span class="line"><span>    path = third_party/zlib</span></span>
<span class="line"><span>    url = https://github.com/madler/zlib</span></span>
<span class="line"><span>    # When using CMake to build, the zlib submodule ends up with a</span></span>
<span class="line"><span>    # generated file that makes Git consider the submodule dirty. This</span></span>
<span class="line"><span>    # state can be ignored for day-to-day development on gRPC.</span></span>
<span class="line"><span>    ignore = dirty</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用了zlib,在Gitee上搜索其代码仓库为<a href="https://gitee.com/mirrors/zlib,%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E5%A6%82%E4%B8%8B%E6%8C%87%E4%BB%A4clone" target="_blank" rel="noopener noreferrer">https://gitee.com/mirrors/zlib,可以使用如下指令clone</a>:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>git clone https://gitee.com/mirrors/zlib.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因而替换成:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[submodule &quot;third_party/zlib&quot;]</span></span>
<span class="line"><span>    path = third_party/zlib</span></span>
<span class="line"><span>    #url = https://github.com/madler/zlib</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/zlib.git</span></span>
<span class="line"><span>    # When using CMake to build, the zlib submodule ends up with a</span></span>
<span class="line"><span>    # generated file that makes Git consider the submodule dirty. This</span></span>
<span class="line"><span>    # state can be ignored for day-to-day development on gRPC.</span></span>
<span class="line"><span>    ignore = dirty</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方法可以找到部分依赖库的最新镜像仓库,但是有一些找不到最新的,例如protobuf等库,用户local-grpc提供了gRPC依赖的全部代码仓库,可以使用这些仓库(注意代码不是同步镜像,导致gRPC只能构造相应版本),其中protobuf链接为:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>https://gitee.com/local-grpc/protobuf.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里将.gitmodules修改为如下内容即可:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[submodule &quot;third_party/zlib&quot;]</span></span>
<span class="line"><span>    path = third_party/zlib</span></span>
<span class="line"><span>    #url = https://github.com/madler/zlib</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/zlib.git</span></span>
<span class="line"><span>    # When using CMake to build, the zlib submodule ends up with a</span></span>
<span class="line"><span>    # generated file that makes Git consider the submodule dirty. This</span></span>
<span class="line"><span>    # state can be ignored for day-to-day development on gRPC.</span></span>
<span class="line"><span>    ignore = dirty</span></span>
<span class="line"><span>[submodule &quot;third_party/protobuf&quot;]</span></span>
<span class="line"><span>    path = third_party/protobuf</span></span>
<span class="line"><span>    #url = https://github.com/google/protobuf.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/protobuf.git</span></span>
<span class="line"><span>[submodule &quot;third_party/googletest&quot;]</span></span>
<span class="line"><span>    path = third_party/googletest</span></span>
<span class="line"><span>    #url = https://github.com/google/googletest.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/googletest.git</span></span>
<span class="line"><span>[submodule &quot;third_party/benchmark&quot;]</span></span>
<span class="line"><span>    path = third_party/benchmark</span></span>
<span class="line"><span>    #url = https://github.com/google/benchmark</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/google-benchmark.git</span></span>
<span class="line"><span>[submodule &quot;third_party/boringssl-with-bazel&quot;]</span></span>
<span class="line"><span>    path = third_party/boringssl-with-bazel</span></span>
<span class="line"><span>    #url = https://github.com/google/boringssl.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/boringssl.git</span></span>
<span class="line"><span>[submodule &quot;third_party/re2&quot;]</span></span>
<span class="line"><span>    path = third_party/re2</span></span>
<span class="line"><span>    #url = https://github.com/google/re2.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/re2.git</span></span>
<span class="line"><span>[submodule &quot;third_party/cares/cares&quot;]</span></span>
<span class="line"><span>    path = third_party/cares/cares</span></span>
<span class="line"><span>    #url = https://github.com/c-ares/c-ares.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/c-ares.git</span></span>
<span class="line"><span>    branch = cares-1_12_0</span></span>
<span class="line"><span>[submodule &quot;third_party/bloaty&quot;]</span></span>
<span class="line"><span>    path = third_party/bloaty</span></span>
<span class="line"><span>    #url = https://github.com/google/bloaty.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/bloaty.git</span></span>
<span class="line"><span>[submodule &quot;third_party/abseil-cpp&quot;]</span></span>
<span class="line"><span>    path = third_party/abseil-cpp</span></span>
<span class="line"><span>    #url = https://github.com/abseil/abseil-cpp.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/abseil-cpp.git</span></span>
<span class="line"><span>    branch = lts_2020_02_25</span></span>
<span class="line"><span>[submodule &quot;third_party/envoy-api&quot;]</span></span>
<span class="line"><span>    path = third_party/envoy-api</span></span>
<span class="line"><span>    #url = https://github.com/envoyproxy/data-plane-api.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/data-plane-api.git</span></span>
<span class="line"><span>[submodule &quot;third_party/googleapis&quot;]</span></span>
<span class="line"><span>    path = third_party/googleapis</span></span>
<span class="line"><span>    #url = https://github.com/googleapis/googleapis.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/googleapis.git</span></span>
<span class="line"><span>[submodule &quot;third_party/protoc-gen-validate&quot;]</span></span>
<span class="line"><span>    path = third_party/protoc-gen-validate</span></span>
<span class="line"><span>    #url = https://github.com/envoyproxy/protoc-gen-validate.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/protoc-gen-validate.git</span></span>
<span class="line"><span>[submodule &quot;third_party/udpa&quot;]</span></span>
<span class="line"><span>    path = third_party/udpa</span></span>
<span class="line"><span>    #url = https://github.com/cncf/udpa.git</span></span>
<span class="line"><span>    url = https://gitee.com/local-grpc/udpa.git</span></span>
<span class="line"><span>[submodule &quot;third_party/libuv&quot;]</span></span>
<span class="line"><span>    path = third_party/libuv</span></span>
<span class="line"><span>    #url = https://github.com/libuv/libuv.git</span></span>
<span class="line"><span>    url = https://gitee.com/mirrors/libuv.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用如下指令拉取gRPC所有依赖:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>cd grpc</span></span>
<span class="line"><span>git submodule update --init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译grpc" tabindex="-1"><a class="header-anchor" href="#编译grpc"><span>编译grpc</span></a></h2><h3 id="cmake安装" tabindex="-1"><a class="header-anchor" href="#cmake安装"><span>CMake安装</span></a></h3><p>为了编译grpc，需要下载cmake，cmake是一个跨平台编译工具，在之前编译protobuf时已经下载过了，这里再次介绍一下<br> CMake是一个跨平台的开源构建工具，可以用于自动化构建、测试和打包C++代码。与其他构建工具相比，CMake的优点之一是它的配置文件具有可读性和可维护性，而且支持多种编译器、操作系统和构建工具。</p><p>要在windows上生成protobuf对应的库，就需要用到cmake。<br> 官方下载地址<a href="https://cmake.org/download/" target="_blank" rel="noopener noreferrer">https://cmake.org/download/</a>， 选择Windows Source下载。</p><h3 id="nasm" tabindex="-1"><a class="header-anchor" href="#nasm"><span>NASM</span></a></h3><p>编译grpc需要准备nasm,所以也要下载nasm, 下载地址为<a href="https://www.nasm.us/" target="_blank" rel="noopener noreferrer">https://www.nasm.us/</a>,点击下载指定版本，安装即可，<br><a href="./all_images/1685268741914.jpg"><img src="/assets/1685268741914-DckZRB8S.jpg" alt="配图" loading="lazy"></a><br> 环境变量配置如下<br><a href="./all_images/1685268920381.jpg"><img src="/assets/1685268920381-B-kaPPY9.jpg" alt="配图" loading="lazy"></a></p><h3 id="go安装" tabindex="-1"><a class="header-anchor" href="#go安装"><span>Go安装</span></a></h3><p>windows环境下下载go，地址<a href="https://studygolang.com/dl" target="_blank" rel="noopener noreferrer">https://studygolang.com/dl</a>。<br> 选择对应系统的安装包下载即可。一路下载安装，最后go会自动写入的环境变量。<br> Linux可以选择手动安装二进制包再配置环境变量。<br> 安装好后，因为go的库包默认在外网，下载很慢，所以要切换代理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>go env -w GOPROXY=https://goproxy.cn,direct  # 设置代理，国内网络开启</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="perl安装" tabindex="-1"><a class="header-anchor" href="#perl安装"><span>Perl安装</span></a></h3><p>Perl安装可以去官网下载<a href="https://www.activestate.com/products/perl/" target="_blank" rel="noopener noreferrer">https://www.activestate.com/products/perl/</a></p><h2 id="编译grpc-1" tabindex="-1"><a class="header-anchor" href="#编译grpc-1"><span>编译grpc</span></a></h2><p>接下来需要用CMake编译grpc来生成需要的visual studio 项目</p><figure><a href="./all_images/1685271209281.jpg"><img src="/assets/1685271209281-CkrUJmL9.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>1是grpc源码目录<br> 2是grpc生成的visual studio项目目录<br> 3 是要生成哪些项目。</p><p>选择All项目进行全量编译，编译后就可以在Debug或Release文件夹找到对应生成的库文件和exe了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>本文介绍了windows环境下如何配置grpc项目和编译生成需要的库。</p><h1 id="day-07-属性管理器" tabindex="-1"><a class="header-anchor" href="#day-07-属性管理器"><span>Day 07：属性管理器</span></a></h1><h2 id="属性管理器" tabindex="-1"><a class="header-anchor" href="#属性管理器"><span>属性管理器</span></a></h2><p>推荐一种可复制配置的方式，视图里选择其他窗口，再选择属性管理器</p><figure><a href="./all_images/1710292918199.jpg"><img src="/assets/1710292918199-B-mMcnhO.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>选择要配置的类型，我选择Debug 64位的配置，添加新项目属性表</p><figure><a href="./all_images/2789d4d0598e69bff5f0452159d3c14.png"><img src="/assets/2789d4d0598e69bff5f0452159d3c14-CRnVXPTv.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>选择创建属性的名字</p><figure><a href="./all_images/7675ab8ac46308693eec2ea4ec0f708.png"><img src="/assets/7675ab8ac46308693eec2ea4ec0f708-C45jExAW.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来双击创建好的属性文件，将之前配置的boost和jsoncpp库属性移动到这里，把之前在项目中配置的删除。</p><p>包含目录</p><figure><a href="./all_images/3e98a4ba407416e8a433a7b6254c3a6.png"><img src="/assets/3e98a4ba407416e8a433a7b6254c3a6-DgfX_zFp.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>库目录</p><figure><a href="./all_images/56a894eca5a6b3888ba07f29678b291.png"><img src="/assets/56a894eca5a6b3888ba07f29678b291-C5nnRuT9.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>链接库</p><figure><a href="./all_images/43aba5606318b56dc56ba1a884c18b3.png"><img src="/assets/43aba5606318b56dc56ba1a884c18b3-B6KNKfrc.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来配置grpc头文件包含目录，C++ 常规-&gt; 附加包含目录添加如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\third_party\\re2</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\third_party\\address_sorting\\include</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\third_party\\abseil-cpp</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\third_party\\protobuf\\src</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\include</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><a href="./all_images/375f8c4b21f643408b73a19e415fcd5.png"><img src="/assets/375f8c4b21f643408b73a19e415fcd5-BM20DLvA.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来配置库路径, 在链接器常规选项下，点击附加库目录，添加需要的库目录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\re2\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\types\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\synchronization\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\status\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\random\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\flags\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\debugging\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\container\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\hash\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\boringssl-with-bazel\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\numeric\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\time\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\base\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\abseil-cpp\\absl\\strings\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\protobuf\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\zlib\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\Debug</span></span>
<span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\cares\\cares\\lib\\Debug</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><a href="./all_images/89fcb7a4afef6721c893187fffcfecf.png"><img src="/assets/89fcb7a4afef6721c893187fffcfecf-CE1o0hOv.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在链接器-&gt;输入-&gt;附加依赖项中添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>libprotobufd.lib</span></span>
<span class="line"><span>gpr.lib</span></span>
<span class="line"><span>grpc.lib</span></span>
<span class="line"><span>grpc++.lib</span></span>
<span class="line"><span>grpc++_reflection.lib</span></span>
<span class="line"><span>address_sorting.lib</span></span>
<span class="line"><span>ws2_32.lib</span></span>
<span class="line"><span>cares.lib</span></span>
<span class="line"><span>zlibstaticd.lib</span></span>
<span class="line"><span>upb.lib</span></span>
<span class="line"><span>ssl.lib</span></span>
<span class="line"><span>crypto.lib</span></span>
<span class="line"><span>absl_bad_any_cast_impl.lib</span></span>
<span class="line"><span>absl_bad_optional_access.lib</span></span>
<span class="line"><span>absl_bad_variant_access.lib</span></span>
<span class="line"><span>absl_base.lib</span></span>
<span class="line"><span>absl_city.lib</span></span>
<span class="line"><span>absl_civil_time.lib</span></span>
<span class="line"><span>absl_cord.lib</span></span>
<span class="line"><span>absl_debugging_internal.lib</span></span>
<span class="line"><span>absl_demangle_internal.lib</span></span>
<span class="line"><span>absl_examine_stack.lib</span></span>
<span class="line"><span>absl_exponential_biased.lib</span></span>
<span class="line"><span>absl_failure_signal_handler.lib</span></span>
<span class="line"><span>absl_flags.lib</span></span>
<span class="line"><span>absl_flags_config.lib</span></span>
<span class="line"><span>absl_flags_internal.lib</span></span>
<span class="line"><span>absl_flags_marshalling.lib</span></span>
<span class="line"><span>absl_flags_parse.lib</span></span>
<span class="line"><span>absl_flags_program_name.lib</span></span>
<span class="line"><span>absl_flags_usage.lib</span></span>
<span class="line"><span>absl_flags_usage_internal.lib</span></span>
<span class="line"><span>absl_graphcycles_internal.lib</span></span>
<span class="line"><span>absl_hash.lib</span></span>
<span class="line"><span>absl_hashtablez_sampler.lib</span></span>
<span class="line"><span>absl_int128.lib</span></span>
<span class="line"><span>absl_leak_check.lib</span></span>
<span class="line"><span>absl_leak_check_disable.lib</span></span>
<span class="line"><span>absl_log_severity.lib</span></span>
<span class="line"><span>absl_malloc_internal.lib</span></span>
<span class="line"><span>absl_periodic_sampler.lib</span></span>
<span class="line"><span>absl_random_distributions.lib</span></span>
<span class="line"><span>absl_random_internal_distribution_test_util.lib</span></span>
<span class="line"><span>absl_random_internal_pool_urbg.lib</span></span>
<span class="line"><span>absl_random_internal_randen.lib</span></span>
<span class="line"><span>absl_random_internal_randen_hwaes.lib</span></span>
<span class="line"><span>absl_random_internal_randen_hwaes_impl.lib</span></span>
<span class="line"><span>absl_random_internal_randen_slow.lib</span></span>
<span class="line"><span>absl_random_internal_seed_material.lib</span></span>
<span class="line"><span>absl_random_seed_gen_exception.lib</span></span>
<span class="line"><span>absl_random_seed_sequences.lib</span></span>
<span class="line"><span>absl_raw_hash_set.lib</span></span>
<span class="line"><span>absl_raw_logging_internal.lib</span></span>
<span class="line"><span>absl_scoped_set_env.lib</span></span>
<span class="line"><span>absl_spinlock_wait.lib</span></span>
<span class="line"><span>absl_stacktrace.lib</span></span>
<span class="line"><span>absl_status.lib</span></span>
<span class="line"><span>absl_strings.lib</span></span>
<span class="line"><span>absl_strings_internal.lib</span></span>
<span class="line"><span>absl_str_format_internal.lib</span></span>
<span class="line"><span>absl_symbolize.lib</span></span>
<span class="line"><span>absl_synchronization.lib</span></span>
<span class="line"><span>absl_throw_delegate.lib</span></span>
<span class="line"><span>absl_time.lib</span></span>
<span class="line"><span>absl_time_zone.lib</span></span>
<span class="line"><span>absl_statusor.lib</span></span>
<span class="line"><span>re2.lib</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><a href="./all_images/1710301100655.jpg"><img src="/assets/1710301100655-BjQxH6t2.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>之后点击保存会看到项目目录下生成了PropertySheet.props文件</p><h2 id="proto文件编写" tabindex="-1"><a class="header-anchor" href="#proto文件编写"><span>proto文件编写</span></a></h2><p>在项目的根目录下创建一个proto名字为message.proto</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package message;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service VarifyService {</span></span>
<span class="line"><span>  rpc GetVarifyCode (GetVarifyReq) returns (GetVarifyRsp) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetVarifyReq {</span></span>
<span class="line"><span>  string email = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetVarifyRsp {</span></span>
<span class="line"><span>  int32 error = 1;</span></span>
<span class="line"><span>  string email = 2;</span></span>
<span class="line"><span>  string code = 3;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来利用grpc编译后生成的proc.exe生成proto的grpc的头文件和源文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\protobuf\\Debug\\protoc.exe  -I=&quot;.&quot; --grpc_out=&quot;.&quot; --plugin=protoc-gen-grpc=&quot;D:\\cppsoft\\grpc\\visualpro\\Debug\\grpc_cpp_plugin.exe&quot; &quot;message.proto&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上述命令会生成message.grpc.pb.h和message.grpc.pb.cc文件。</p><p>接下来生成用于序列化和反序列化的pb文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\protobuf\\Debug\\protoc.exe --cpp_out=. &quot;message.proto&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上述命令会生成message.pb.h和message.pb.cc文件</p><p>接下来将这些pb.h和pb.cc放入项目中</p><p>新建一个VarifyGrpcClient类，vs帮自动生成头文件和源文件，在头文件添加Grpc客户端类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;grpcpp/grpcpp.h&gt;</span></span>
<span class="line"><span>#include &quot;message.grpc.pb.h&quot;</span></span>
<span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span>#include &quot;Singleton.h&quot;</span></span>
<span class="line"><span>using grpc::Channel;</span></span>
<span class="line"><span>using grpc::Status;</span></span>
<span class="line"><span>using grpc::ClientContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using message::GetVarifyReq;</span></span>
<span class="line"><span>using message::GetVarifyRsp;</span></span>
<span class="line"><span>using message::VarifyService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class VerifyGrpcClient:public Singleton&lt;VerifyGrpcClient&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class Singleton&lt;VerifyGrpcClient&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    GetVarifyRsp GetVarifyCode(std::string email) {</span></span>
<span class="line"><span>        ClientContext context;</span></span>
<span class="line"><span>        GetVarifyRsp reply;</span></span>
<span class="line"><span>        GetVarifyReq request;</span></span>
<span class="line"><span>        request.set_email(email);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Status status = stub_-&gt;GetVarifyCode(&amp;context, request, &amp;reply);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (status.ok()) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            return reply;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        else {</span></span>
<span class="line"><span>            reply.set_error(ErrorCodes::RPCFailed);</span></span>
<span class="line"><span>            return reply;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    VerifyGrpcClient() {</span></span>
<span class="line"><span>        std::shared_ptr&lt;Channel&gt; channel = grpc::CreateChannel(&quot;127.0.0.1:50051&quot;, grpc::InsecureChannelCredentials());</span></span>
<span class="line"><span>        stub_ = VarifyService::NewStub(channel);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::unique_ptr&lt;VarifyService::Stub&gt; stub_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在之前收到post请求获取验证码的逻辑里添加处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RegPost(&quot;/get_varifycode&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto email = src_root[&quot;email&quot;].asString();</span></span>
<span class="line"><span>    GetVarifyRsp rsp = VerifyGrpcClient::GetInstance()-&gt;GetVarifyCode(email);</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;email is &quot; &lt;&lt; email &lt;&lt; endl;</span></span>
<span class="line"><span>    root[&quot;error&quot;] = rsp.error();</span></span>
<span class="line"><span>    root[&quot;email&quot;] = src_root[&quot;email&quot;];</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器读取配置" tabindex="-1"><a class="header-anchor" href="#服务器读取配置"><span>服务器读取配置</span></a></h2><p>很多参数都是写死的，现通过配置文件读取以方便以后修改<br> 在项目中添加config.ini文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[GateServer]</span></span>
<span class="line"><span>Port = 8080</span></span>
<span class="line"><span>[VarifyServer]</span></span>
<span class="line"><span>Port = 50051</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加ConfigMgr类用来读取和管理配置, 定义一个SectionInfo类管理key和value</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>struct SectionInfo {</span></span>
<span class="line"><span>    SectionInfo(){}</span></span>
<span class="line"><span>    ~SectionInfo(){</span></span>
<span class="line"><span>        _section_datas.clear();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    SectionInfo(const SectionInfo&amp; src) {</span></span>
<span class="line"><span>        _section_datas = src._section_datas;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    SectionInfo&amp; operator = (const SectionInfo&amp; src) {</span></span>
<span class="line"><span>        if (&amp;src == this) {</span></span>
<span class="line"><span>            return *this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this-&gt;_section_datas = src._section_datas;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::map&lt;std::string, std::string&gt; _section_datas;</span></span>
<span class="line"><span>    std::string  operator[](const std::string  &amp;key) {</span></span>
<span class="line"><span>        if (_section_datas.find(key) == _section_datas.end()) {</span></span>
<span class="line"><span>            return &quot;&quot;;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 这里可以添加一些边界检查  </span></span>
<span class="line"><span>        return _section_datas[key];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义ComigMgr管理section和其包含的key与value</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class ConfigMgr</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~ConfigMgr() {</span></span>
<span class="line"><span>        _config_map.clear();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    SectionInfo operator[](const std::string&amp; section) {</span></span>
<span class="line"><span>        if (_config_map.find(section) == _config_map.end()) {</span></span>
<span class="line"><span>            return SectionInfo();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return _config_map[section];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ConfigMgr&amp; operator=(const ConfigMgr&amp; src) {</span></span>
<span class="line"><span>        if (&amp;src == this) {</span></span>
<span class="line"><span>            return *this;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        this-&gt;_config_map = src._config_map;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ConfigMgr(const ConfigMgr&amp; src) {</span></span>
<span class="line"><span>        this-&gt;_config_map = src._config_map;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ConfigMgr();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 存储section和key-value对的map  </span></span>
<span class="line"><span>    std::map&lt;std::string, SectionInfo&gt; _config_map;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数里实现config读取</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ConfigMgr::ConfigMgr(){</span></span>
<span class="line"><span>    // 获取当前工作目录  </span></span>
<span class="line"><span>    boost::filesystem::path current_path = boost::filesystem::current_path();</span></span>
<span class="line"><span>    // 构建config.ini文件的完整路径  </span></span>
<span class="line"><span>    boost::filesystem::path config_path = current_path / &quot;config.ini&quot;;</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Config path: &quot; &lt;&lt; config_path &lt;&lt; std::endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用Boost.PropertyTree来读取INI文件  </span></span>
<span class="line"><span>    boost::property_tree::ptree pt;</span></span>
<span class="line"><span>    boost::property_tree::read_ini(config_path.string(), pt);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 遍历INI文件中的所有section  </span></span>
<span class="line"><span>    for (const auto&amp; section_pair : pt) {</span></span>
<span class="line"><span>        const std::string&amp; section_name = section_pair.first;</span></span>
<span class="line"><span>        const boost::property_tree::ptree&amp; section_tree = section_pair.second;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 对于每个section，遍历其所有的key-value对  </span></span>
<span class="line"><span>        std::map&lt;std::string, std::string&gt; section_config;</span></span>
<span class="line"><span>        for (const auto&amp; key_value_pair : section_tree) {</span></span>
<span class="line"><span>            const std::string&amp; key = key_value_pair.first;</span></span>
<span class="line"><span>            const std::string&amp; value = key_value_pair.second.get_value&lt;std::string&gt;();</span></span>
<span class="line"><span>            section_config[key] = value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        SectionInfo sectionInfo;</span></span>
<span class="line"><span>        sectionInfo._section_datas = section_config;</span></span>
<span class="line"><span>        // 将section的key-value对保存到config_map中  </span></span>
<span class="line"><span>        _config_map[section_name] = sectionInfo;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 输出所有的section和key-value对  </span></span>
<span class="line"><span>    for (const auto&amp; section_entry : _config_map) {</span></span>
<span class="line"><span>        const std::string&amp; section_name = section_entry.first;</span></span>
<span class="line"><span>        SectionInfo section_config = section_entry.second;</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;[&quot; &lt;&lt; section_name &lt;&lt; &quot;]&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        for (const auto&amp; key_value_pair : section_config._section_datas) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; key_value_pair.first &lt;&lt; &quot;=&quot; &lt;&lt; key_value_pair.second &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在const.h里声明一个全局变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class ConfigMgr;</span></span>
<span class="line"><span>extern ConfigMgr gCfgMgr;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在main函数中将8080端口改为从配置读取</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ConfigMgr gCfgMgr;</span></span>
<span class="line"><span>std::string gate_port_str = gCfgMgr[&quot;GateServer&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>unsigned short gate_port = atoi(gate_port_str.c_str());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他地方想要获取配置信息就不需要定义了，直接包含const.h并且使用gCfgMgr即可。</p><h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h2><p>本节基于visual studio配置grpc，并实现了grpc客户端发送请求的逻辑。下一节实现 grpc server</p><hr><h1 id="day-08-认证服务" tabindex="-1"><a class="header-anchor" href="#day-08-认证服务"><span>Day 08：认证服务</span></a></h1><h2 id="认证服务" tabindex="-1"><a class="header-anchor" href="#认证服务"><span>认证服务</span></a></h2><p>的认证服务要给邮箱发送验证码，所以用nodejs较为合适，nodejs是一门IO效率很高而且生态完善的语言，用到发送邮件的库也方便。</p><p>nodejs可以去官网下载<a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">https://nodejs.org/en</a>，一路安装就可以了</p><p>新建VarifyServer文件夹，在文件夹内部初始化server要用到的nodejs库的配置文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>根据提示同意会创建一个package.json文件</p><figure><a href="./all_images/1710380349325.jpg"><img src="/assets/1710380349325-CxwOhPHn.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来安装grpc-js包，也可以安装grpc，grpc是C++版本，grpc-js是js版本，C++版本停止维护了。所以用grpc-js版本。</p><p>安装过程出现了错误，因为淘宝镜像地址过期了</p><figure><a href="./all_images/1710381278285.jpg"><img src="/assets/1710381278285-BkBe5rf8.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>清除之前npm镜像地址</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm cache clean --force</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重新设置新的淘宝镜像</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm config set registry https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接着下载grpc-js就成功了</p><figure><a href="./all_images/1710381922730.jpg"><img src="/assets/1710381922730-DMoHBb1M.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接着安装proto-loader用来动态解析proto文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm install @grpc/proto-loader</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><a href="./all_images/1710382537391.jpg"><img src="/assets/1710382537391-CG87N5Na.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>再安装email处理的库</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm install nodemailer</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将proto文件放入VarifyServer文件夹，并且新建一个proto.js用来解析proto文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>const grpc = require(&#39;@grpc/grpc-js&#39;)</span></span>
<span class="line"><span>const protoLoader = require(&#39;@grpc/proto-loader&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const PROTO_PATH = path.join(__dirname, &#39;message.proto&#39;)</span></span>
<span class="line"><span>const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true })</span></span>
<span class="line"><span>const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const message_proto = protoDescriptor.message</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = message_proto</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>keepCase: 如果为 true，则保留字段名的原始大小写。如果为 false，则将所有字段名转换为驼峰命名法。</p><p>longs: 控制如何表示 Protocol Buffers 中的 long 类型。如果设置为 String，则长整数会被转换为字符串，以避免 JavaScript 中的整数溢出问题。</p><p>enums: 控制如何表示 Protocol Buffers 中的枚举类型。如果设置为 String，则枚举值会被转换为字符串。</p><p>defaults: 如果为 true，则为未明确设置的字段提供默认值。</p><p>oneofs: 如果为 true，则支持 Protocol Buffers 中的 oneof 特性。</p><p>在写代码发送邮件之前，先去邮箱开启smtp服务。我用的163邮箱，在邮箱设置中查找smtp服务器地址，需要开启smtp服务。这个是固定的，不需要修改。</p><p>网易163邮箱的 SMTP 服务器地址为: <a href="http://smtp.163.com" target="_blank" rel="noopener noreferrer">smtp.163.com</a></p><p>发送邮件，建议使用授权码(有的邮箱叫 独立密码)，确保邮箱密码的安全性。授权码在邮箱设置中进行设置。如果开启了授权码，发送邮件的时候，必须使用授权码。</p><p>这里设置开启smtp服务和授权码。我这里已经是设置好的。</p><figure><a href="./all_images/20210625165014232.png"><img src="/assets/20210625165014232-C9sE_9tb.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>新增一个授权码用于发邮件</p><figure><a href="./all_images/20210625165014232_20_282_29.png"><img src="/assets/20210625165014232-C9sE_9tb.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置"><span>读取配置</span></a></h2><p>因为要实现参数可配置，所以要读取配置，先在文件夹内创建一个config.json文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;email&quot;: {</span></span>
<span class="line"><span>      &quot;user&quot;: &quot;secondtonone1@163.com&quot;,</span></span>
<span class="line"><span>      &quot;pass&quot;: &quot;CRWTAZOSNCWDDQQTllfc&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user是得邮箱地址，pass是邮箱得授权码，只有有了授权码才能用代码发邮件。</p><p>另外也要用到一些常量和全局得变量，所以定义一个const.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>let code_prefix = &quot;code_&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Errors = {</span></span>
<span class="line"><span>    Success : 0,</span></span>
<span class="line"><span>    RedisErr : 1,</span></span>
<span class="line"><span>    Exception : 2,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {code_prefix,Errors}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建config.js用来读取配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let config = JSON.parse(fs.readFileSync(&#39;config.json&#39;, &#39;utf8&#39;));</span></span>
<span class="line"><span>let email_user = config.email.user;</span></span>
<span class="line"><span>let email_pass = config.email.pass;</span></span>
<span class="line"><span>let mysql_host = config.mysql.host;</span></span>
<span class="line"><span>let mysql_port = config.mysql.port;</span></span>
<span class="line"><span>let redis_host = config.redis.host;</span></span>
<span class="line"><span>let redis_port = config.redis.port;</span></span>
<span class="line"><span>let redis_passwd = config.redis.passwd;</span></span>
<span class="line"><span>let code_prefix = &quot;code_&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {email_pass, email_user, mysql_host, mysql_port,redis_host, redis_port, redis_passwd, code_prefix}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来封装发邮件的模块，新建一个email.js文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const nodemailer = require(&#39;nodemailer&#39;);</span></span>
<span class="line"><span>const config_module = require(&quot;./config&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 创建发送邮件的代理</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>let transport = nodemailer.createTransport({</span></span>
<span class="line"><span>    host: &#39;smtp.163.com&#39;,</span></span>
<span class="line"><span>    port: 465,</span></span>
<span class="line"><span>    secure: true,</span></span>
<span class="line"><span>    auth: {</span></span>
<span class="line"><span>        user: config_module.email_user, // 发送方邮箱地址</span></span>
<span class="line"><span>        pass: config_module.email_pass // 邮箱授权码或者密码</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现发邮件函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>/**</span></span>
<span class="line"><span> * 发送邮件的函数</span></span>
<span class="line"><span> * @param {*} mailOptions_ 发送邮件的参数</span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function SendMail(mailOptions_){</span></span>
<span class="line"><span>    return new Promise(function(resolve, reject){</span></span>
<span class="line"><span>        transport.sendMail(mailOptions_, function(error, info){</span></span>
<span class="line"><span>            if (error) {</span></span>
<span class="line"><span>                console.log(error);</span></span>
<span class="line"><span>                reject(error);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                console.log(&#39;邮件已成功发送：&#39; + info.response);</span></span>
<span class="line"><span>                resolve(info.response)</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports.SendMail = SendMail</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为transport.SendMail相当于一个异步函数，调用该函数后发送的结果是通过回调函数通知的，所以没办法同步使用，需要用Promise封装这个调用，抛出Promise给外部，那么外部就可以通过await或者then catch的方式处理了。</p><p>新建server.js，用来启动grpc server</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>async function GetVarifyCode(call, callback) {</span></span>
<span class="line"><span>    console.log(&quot;email is &quot;, call.request.email)</span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        uniqueId = uuidv4();</span></span>
<span class="line"><span>        console.log(&quot;uniqueId is &quot;, uniqueId)</span></span>
<span class="line"><span>        let text_str =  &#39;您的验证码为&#39;+ uniqueId +&#39;请三分钟内完成注册&#39;</span></span>
<span class="line"><span>        //发送邮件</span></span>
<span class="line"><span>        let mailOptions = {</span></span>
<span class="line"><span>            from: &#39;secondtonone1@163.com&#39;,</span></span>
<span class="line"><span>            to: call.request.email,</span></span>
<span class="line"><span>            subject: &#39;验证码&#39;,</span></span>
<span class="line"><span>            text: text_str,</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let send_res = await emailModule.SendMail(mailOptions);</span></span>
<span class="line"><span>        console.log(&quot;send res is &quot;, send_res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callback(null, { email:  call.request.email,</span></span>
<span class="line"><span>            error:const_module.Errors.Success</span></span>
<span class="line"><span>        }); </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }catch(error){</span></span>
<span class="line"><span>        console.log(&quot;catch error is &quot;, error)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callback(null, { email:  call.request.email,</span></span>
<span class="line"><span>            error:const_module.Errors.Exception</span></span>
<span class="line"><span>        }); </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span>    var server = new grpc.Server()</span></span>
<span class="line"><span>    server.addService(message_proto.VarifyService.service, { GetVarifyCode: GetVarifyCode })</span></span>
<span class="line"><span>    server.bindAsync(&#39;0.0.0.0:50051&#39;, grpc.ServerCredentials.createInsecure(), () =&gt; {</span></span>
<span class="line"><span>        server.start()</span></span>
<span class="line"><span>        console.log(&#39;grpc server started&#39;)        </span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GetVarifyCode声明为async是为了能在内部调用await。</p><h2 id="提升gateserver并发" tabindex="-1"><a class="header-anchor" href="#提升gateserver并发"><span>提升GateServer并发</span></a></h2><p>添加ASIO IOContext Pool 结构，让多个iocontext跑在不同的线程中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>#include &quot;Singleton.h&quot;</span></span>
<span class="line"><span>class AsioIOServicePool:public Singleton&lt;AsioIOServicePool&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend Singleton&lt;AsioIOServicePool&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using IOService = boost::asio::io_context;</span></span>
<span class="line"><span>    using Work = boost::asio::io_context::work;</span></span>
<span class="line"><span>    using WorkPtr = std::unique_ptr&lt;Work&gt;;</span></span>
<span class="line"><span>    ~AsioIOServicePool();</span></span>
<span class="line"><span>    AsioIOServicePool(const AsioIOServicePool&amp;) = delete;</span></span>
<span class="line"><span>    AsioIOServicePool&amp; operator=(const AsioIOServicePool&amp;) = delete;</span></span>
<span class="line"><span>    // 使用 round-robin 的方式返回一个 io_service</span></span>
<span class="line"><span>    boost::asio::io_context&amp; GetIOService();</span></span>
<span class="line"><span>    void Stop();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    AsioIOServicePool(std::size_t size = 2/*std::thread::hardware_concurrency()*/);</span></span>
<span class="line"><span>    std::vector&lt;IOService&gt; _ioServices;</span></span>
<span class="line"><span>    std::vector&lt;WorkPtr&gt; _works;</span></span>
<span class="line"><span>    std::vector&lt;std::thread&gt; _threads;</span></span>
<span class="line"><span>    std::size_t                        _nextIOService;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;AsioIOServicePool.h&quot;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>AsioIOServicePool::AsioIOServicePool(std::size_t size):_ioServices(size),</span></span>
<span class="line"><span>_works(size), _nextIOService(0){</span></span>
<span class="line"><span>    for (std::size_t i = 0; i &lt; size; ++i) {</span></span>
<span class="line"><span>        _works[i] = std::unique_ptr&lt;Work&gt;(new Work(_ioServices[i]));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //遍历多个ioservice，创建多个线程，每个线程内部启动ioservice</span></span>
<span class="line"><span>    for (std::size_t i = 0; i &lt; _ioServices.size(); ++i) {</span></span>
<span class="line"><span>        _threads.emplace_back([this, i]() {</span></span>
<span class="line"><span>            _ioServices[i].run();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AsioIOServicePool::~AsioIOServicePool() {</span></span>
<span class="line"><span>    Stop();</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;AsioIOServicePool destruct&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>boost::asio::io_context&amp; AsioIOServicePool::GetIOService() {</span></span>
<span class="line"><span>    auto&amp; service = _ioServices[_nextIOService++];</span></span>
<span class="line"><span>    if (_nextIOService == _ioServices.size()) {</span></span>
<span class="line"><span>        _nextIOService = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return service;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void AsioIOServicePool::Stop(){</span></span>
<span class="line"><span>    //因为仅仅执行work.reset并不能让iocontext从run的状态中退出</span></span>
<span class="line"><span>    //当iocontext已经绑定了读或写的监听事件后，还需要手动stop该服务。</span></span>
<span class="line"><span>    for (auto&amp; work : _works) {</span></span>
<span class="line"><span>        //把服务先停止</span></span>
<span class="line"><span>        work-&gt;get_io_context().stop();</span></span>
<span class="line"><span>        work.reset();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto&amp; t : _threads) {</span></span>
<span class="line"><span>        t.join();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改CServer处Start逻辑, 改为每次从IOServicePool连接池中获取连接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CServer::Start()</span></span>
<span class="line"><span>{    </span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    auto&amp; io_context = AsioIOServicePool::GetInstance()-&gt;GetIOService();</span></span>
<span class="line"><span>    std::shared_ptr&lt;HttpConnection&gt; new_con = std::make_shared&lt;HttpConnection&gt;(io_context);</span></span>
<span class="line"><span>    _acceptor.async_accept(new_con-&gt;GetSocket(), [self, new_con](beast::error_code ec) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //出错则放弃这个连接，继续监听新链接</span></span>
<span class="line"><span>            if (ec) {</span></span>
<span class="line"><span>                self-&gt;Start();</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //处理新链接，创建HpptConnection类管理新连接</span></span>
<span class="line"><span>            new_con-&gt;Start();</span></span>
<span class="line"><span>            //继续监听</span></span>
<span class="line"><span>            self-&gt;Start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (std::exception&amp; exp) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;exception is &quot; &lt;&lt; exp.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>            self-&gt;Start();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了方便读取配置文件，将ConfigMgr改为单例, 将构造函数变成私有，添加Inst函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>static ConfigMgr&amp; Inst() {</span></span>
<span class="line"><span>    static ConfigMgr cfg_mgr;</span></span>
<span class="line"><span>    return cfg_mgr;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VerifyGrpcClient.cpp中添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class RPConPool {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    RPConPool(size_t poolSize, std::string host, std::string port)</span></span>
<span class="line"><span>        : poolSize_(poolSize), host_(host), port_(port), b_stop_(false) {</span></span>
<span class="line"><span>        for (size_t i = 0; i &lt; poolSize_; ++i) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            std::shared_ptr&lt;Channel&gt; channel = grpc::CreateChannel(host+&quot;:&quot;+port,</span></span>
<span class="line"><span>                grpc::InsecureChannelCredentials());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            connections_.push(VarifyService::NewStub(channel));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~RPConPool() {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        Close();</span></span>
<span class="line"><span>        while (!connections_.empty()) {</span></span>
<span class="line"><span>            connections_.pop();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::unique_ptr&lt;VarifyService::Stub&gt; getConnection() {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        cond_.wait(lock, [this] {</span></span>
<span class="line"><span>            if (b_stop_) {</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return !connections_.empty();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        //如果停止则直接返回空指针</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return  nullptr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto context = std::move(connections_.front());</span></span>
<span class="line"><span>        connections_.pop();</span></span>
<span class="line"><span>        return context;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void returnConnection(std::unique_ptr&lt;VarifyService::Stub&gt; context) {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        connections_.push(std::move(context));</span></span>
<span class="line"><span>        cond_.notify_one();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void Close() {</span></span>
<span class="line"><span>        b_stop_ = true;</span></span>
<span class="line"><span>        cond_.notify_all();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    atomic&lt;bool&gt; b_stop_;</span></span>
<span class="line"><span>    size_t poolSize_;</span></span>
<span class="line"><span>    std::string host_;</span></span>
<span class="line"><span>    std::string port_;</span></span>
<span class="line"><span>    std::queue&lt;std::unique_ptr&lt;VarifyService::Stub&gt;&gt; connections_;</span></span>
<span class="line"><span>    std::mutex mutex_;</span></span>
<span class="line"><span>    std::condition_variable cond_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在VerifyGrpcClient类中添加成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::unique_ptr&lt;RPConPool&gt; pool_;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改构造函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>VerifyGrpcClient::VerifyGrpcClient() {</span></span>
<span class="line"><span>    auto&amp; gCfgMgr = ConfigMgr::Inst();</span></span>
<span class="line"><span>    std::string host = gCfgMgr[&quot;VarifyServer&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    std::string port = gCfgMgr[&quot;VarifyServer&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    pool_.reset(new RPConPool(5, host, port));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当想连接grpc server端时，可以通过池子获取连接，用完之后再返回连接给池子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>GetVarifyRsp GetVarifyCode(std::string email) {</span></span>
<span class="line"><span>    ClientContext context;</span></span>
<span class="line"><span>    GetVarifyRsp reply;</span></span>
<span class="line"><span>    GetVarifyReq request;</span></span>
<span class="line"><span>    request.set_email(email);</span></span>
<span class="line"><span>    auto stub = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    Status status = stub-&gt;GetVarifyCode(&amp;context, request, &amp;reply);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (status.ok()) {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(stub));</span></span>
<span class="line"><span>        return reply;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(stub));</span></span>
<span class="line"><span>        reply.set_error(ErrorCodes::RPCFailed);</span></span>
<span class="line"><span>        return reply;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span>总结</span></a></h2><p>到本节为止完成nodejs搭建的grpc server， 修改package.json中的脚本</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;serve&quot;: &quot;node server.js&quot;</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着命令行执行 npm run serve即可启动grpc 服务。</p><hr><h1 id="day-09-邮箱验证服务联调" tabindex="-1"><a class="header-anchor" href="#day-09-邮箱验证服务联调"><span>Day 09：邮箱验证服务联调</span></a></h1><h2 id="邮箱验证服务联调" tabindex="-1"><a class="header-anchor" href="#邮箱验证服务联调"><span>邮箱验证服务联调</span></a></h2><p>启动GateServer和VarifyServer</p><p>启动客户端，点击注册按钮进入注册界面，输入邮箱并且点击获取验证码</p><figure><a href="./all_images/1710646053282.jpg"><img src="/assets/1710646053282-BCacZ3pL.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>GateServer收到Client发送的请求后，会调用grpc 服务 访问VarifyServer，VarifyServer会随机生成验证码，并且调用邮箱模块发送邮件给指定邮箱。而且把发送的结果给GateServer，GateServer再将消息回传给客户端。</p><h2 id="设置验证码过期" tabindex="-1"><a class="header-anchor" href="#设置验证码过期"><span>设置验证码过期</span></a></h2><p>的验证码是要设置过期的，可以用redis管理过期的验证码自动删除，key为邮箱，value为验证码，过期时间为3min。</p><h2 id="windows-安装redis服务" tabindex="-1"><a class="header-anchor" href="#windows-安装redis服务"><span>windows 安装redis服务</span></a></h2><p>windows 版本下载地址:</p><p><a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noopener noreferrer">https://github.com/tporadowski/redis/releases</a></p><p>下载完成后解压</p><figure><a href="./all_images/1710649614458.jpg"><img src="/assets/1710649614458-nfqXel9Q.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>修改redis.windows.conf, 并且修改端口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>port 6380</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>找到requirepass foobared，下面添加requirepass</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># requirepass foobared</span></span>
<span class="line"><span>requirepass 123456</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动redis 服务器<code>.\\redis-server.exe .\\redis.windows.conf</code></p><figure><a href="./all_images/1710649945760.jpg"><img src="/assets/1710649945760-BRouXK69.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>启动客户端 <code>.\\redis-cli.exe -p 6380</code>, 输入密码登录成功</p><figure><a href="./all_images/1710650063208.jpg"><img src="/assets/1710650063208-C-5HCG9T.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="linux-安装redis服务" tabindex="-1"><a class="header-anchor" href="#linux-安装redis服务"><span>Linux 安装redis服务</span></a></h2><p>Linux安装容器后，直接用容器启动redis</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker run -d --name llfc-redis -p 6380:6379 redis  --requirepass &quot;123456&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了方便测试能否链接以及以后查看数据,大家可以下载redis desktop manager</p><p>官网链接<br><a href="redisdesktop.com">redisdesktop.com/</a></p><p>下载后安装</p><p>设置好ip和密码，点击测试连接连通就成功了</p><figure><a href="./all_images/1710657223612.jpg"><img src="/assets/1710657223612-4M3_qdKQ.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="widows编译和配置redis" tabindex="-1"><a class="header-anchor" href="#widows编译和配置redis"><span>widows编译和配置redis</span></a></h2><p>Linux的redis库直接编译安装即可，windows反而麻烦一些，先阐述windows环境如何配置redis库， C++ 的redis库有很多种，最常用的有hredis和redis-plus-plus. 用redis-plus-plus. 这里介绍一种简单的安装方式---vcpkg</p><p>先安装vcpkg, 源码地址</p><p><a href="https://github.com/microsoft/vcpkg/releases" target="_blank" rel="noopener noreferrer">https://github.com/microsoft/vcpkg/releases</a></p><p>下载源码后</p><p>windows版本redis下载地址</p><p><a href="https://github.com/microsoftarchive/redis" target="_blank" rel="noopener noreferrer">https://github.com/microsoftarchive/redis</a></p><p>因为是源码，所以进入msvc目录</p><figure><a href="./all_images/1710725726234.jpg"><img src="/assets/1710725726234-B90dZf05.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>用visual studio打开sln文件，弹出升级窗口</p><figure><a href="./all_images/1710725937787.jpg"><img src="/assets/1710725937787-CmdXNP1C.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>只需要生成hiredis工程和Win32_Interop工程即可，分别点击生成,生成hiredis.lib和Win32_Interop.lib即可</p><p>右键两个工程的属性，代码生成里选择运行时库加载模式为MDD(Debug模式动态运行加载)，为了兼容其他的库，其他的库也是MDD模式</p><figure><a href="./all_images/1710726777016.jpg"><img src="/assets/1710726777016-CZEgVQom.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>编译Win32_Interop.lib时报错， system_error不是std成员，</p><figure><a href="./all_images/1710727129177.jpg"><img src="/assets/1710727129177-BAg373CG.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>解决办法为在Win32_variadicFunctor.cpp和Win32_FDAPI.cpp添加<br><code>#include &lt;system_error&gt;</code>,再右键生成成功</p><figure><a href="./all_images/1710729372811.jpg"><img src="/assets/1710729372811-DQieXSm9.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>将hiredis.lib和Win32_Interop.lib拷贝到<code>D:\\cppsoft\\reids\\lib</code></p><p>将<code>redis-3.0\\deps</code>和<code>redis-3.0\\src</code>文件夹拷贝到<code>D:\\cppsoft\\reids</code></p><p>然后在visual studio中配置VC++ 包含目录</p><figure><a href="./all_images/1710811823982.jpg"><img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQ8AAACkCAYAAACJg6unAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA3mSURBVHhe7Z29rx3FGYe3pCMdAqRUpAEFEC7QvYZrDIkEGDA2Dk2aCJQj8QfQIYFS8NFwb4oQkVg4KZFoEHCrFLgBRQkKYEWRuCkMLUJClmVHUZLJvrNfM7MzO7tz5hyfj+eRfpF3vvad2Xd+u3s456Y4ceJhZWpv76Q6efIn6rHHnlBPPnlanT17Tp0797O10jPPbLrOIXTDVdx554+Vqfvv31FPP31GvfPOBfXJJ5+ob7/9VgEAuNRPHif1E8cTTzyl3nxzX3355aW6GgDAT3HvvcfUPfccU8eP76nXX39DXb16ta4CAAhTiHEcO3a/ev75X6rPP/+8LgYAGEabx4MPPqQuXPhDXQQAEEebxyOP/FRdvHixLgIAiFOax33q0UdPqcuXL9dFAABxtHmcOvVkfQgAMI7i7rsxDwCYToJ5HKpZMSv/dzqHs0IVQ30PZ2W9tAlpVx0c1W2FaPu0OAEgzmTzODrYVcVs+pbUxiH9ZMPvHijTA1qkLjj2kTrYdcxjkHSTA4A4E81DNqR7d7e129vdsuml/EDNGtMIGchU8zg6ULueGDphHgCLYpJ5xJ465OnCNA/d3nzVkM3e9K83vjVc9DWEJw+AVWG8eeinhV3Pnb7b0GIejRlUrykH+qnDbt9J2ravM1Wn0U8eup9nTK/KpxwAyMto8zicycYt7+bW60Z/Qwf3vkmu1xaXsn//tQkAFkGGzzwmmoe8rviMQxDz6I1vyjaP6rXIeDVxTWnQjABgHqabR2jj+54Moh9oOu2TnjyqzzZmYlyzynzk6UO/1gRjBYB5mds8qrt/bQZSZz5ZmB+QeqheheoDIcU8aoPSrytlf/1fdcpjHjgAFos2j8cfz/HkUWMaQIp5NEbkldlezETK7NeW6jOPuo4nD4CFMdE8ZH+am9knY4Mv8LXF/HzFjMnq3px/wMAAII3J5jGJqU8eALA2FA88cELJX+QGAJjCYp88AGBjKW6//XZ14sSJ+hAAYByYBwAkgXkAQBKYBwAkgXkAQBKYBwAkgXkAQBKteXz//fcIITRamAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEmYB0IoSZgHQihJmAdCKEle87jyxd/U9d/+Wl1/9WWENk+//426cukLK+fRdPXM49o7byv1wx8gtPG69sfz1mZA02SZx5V//F2pH93iXWiENk3/u+MWdeWfX/U2BRonyzyunX+rXdj/7t3nf+RDaM0lud3k+bULv+ttCjROlnn867VX2kWVf7uNEdoEked5hHmgrRN5nkeYB9o6ked5hHmgrRN5nkeYB9o6ked5hHmgrRN5nkeYB9o6ked5hHmgrRN5nkdR8/jVawcIbZQunn26zXP5t68NimuUeQBsFG++1ua5/jckgXnA9oF5ZAHzgO0D88gC5gHbB+aRBcyj5Ujt7xSqKAo1O6yLFs3hTBU7++WZS4721U6xo/b1wZyY4y6NQzULxZ9zbsK864Z5ZCHBPLpN1mlWpo6PgYRaMY72d1ThdY0FzmHSJpgQx0LNIxQH5rFtJJuHtc/kYgbu2LIpd7JlzeI4nBVGnPYcFzaHiZt8dBwLNY9QHEu8Ucw7P8wjC3nMQ9B3AM8TiJQvMJFzMWQeC5vD1E0wNo4Fm4c/Dsxj28hnHma5NpImkULtJdm6V59q4zZt7bqub6xeTl2+frR1ppnZfcw6MY6u3JFOUt8cnFjaZPbNq8GNoVTTT69ZF5N/HuPW0hpXE4opdT19ccgY5TXfLzd2075pYM3tRqybA+aRhSWYR4ncKawOVTLYCSJUY1gXXfo6iResdxKpw3M+a1w59G2q+lDozcETiz6Pefc1x6liMIfQpuXbBMF5lATWMjjuYEyp61kSiMM2jPq81jg3aN1MMI8sZDYPMwFMJAGMiyqJ1ya3iW9ssyxWXyewlYgl3vPZY0XNw52Dr43eeHJ+W3pcXwxmmZX4gXloRqylWTYUk28OVtmEOPSxawD1scc8lr9uBphHFvKZh+8iG1ibM9g2lsyx+oaqrE0i7/mkTZdkcfMY0WZoDXx1Zpn3runMoya6lmbZUEz1+JPXs8ZejznNIxRjbH4T1q0F88hCHvOQi2leKH1BnQsnZW0SVHeIbozD8l1ZauqLbgxevcPaiResL8+x31aZcVbn6xK9xEnKMeZhz8HXxp2XjNvE7tbVc/FtguA8agbX0hl3MKa6rVE5bj1renEkmsdgjBnXrQHzyEKyeViPmG0C1egL6rq+kUz6UNo0YziJVSZON35TJ8TqJema8lJW5lRJONTPNJf2gzdrbuYc6ljMQQRrXk69NtmmrhxHPlz0bYKS8DwEZy2HxhWCMc2znoIZxzzmUbKUdavBPLKQYB7p6A0ZuqCaQGK1xOoXT3wOyyFPHPOv56qsxyQwjyws1Tyqu5N9Z7NZffOIz2FZ5Igjx3quynpMAPPIwpLNI8Y6mMcmsaXriXlkYcXMA2AJYB5ZwDxg+8A8soB5wPaBeWQB84DtA/PIAubRUn142PuOQRA+vF1bMI8sWOZx/a3SKOpF/c+ph9T1V19WH589XS1wqxfVp3fdpF652dRx9ZXVptFz6oOb71CfvuSrWy199+wd6pWHn/PUheZQrcMHL7jlqySJ/SZ1/tkXPXWOXjqtzhvXtD+vCWPVbauxVvD6P/VIZx4X3q63AkzFMo+rH/+pW1SEtkF/+bTeCjAVyzxE//75Gf8iI7Rp+sWz9TaAFHrm0TyBXH9rf/C1pf9Ya5TrR+DmcTXU3ny0bR6Hm7Z2Xdc3Vl+/frR15uuU3ces++phs9zRXafVd945xGMZOueY+v5cnPY6NnO8vmRuY1415FxtuxeOe1/hRo3l6Ts2hqVJXlX++ud6C0AqXvMw1f/ANPRBoVGuf6xk/EhKfthkdZCvNDu/ctU0H1oaX3fWP4pqjiP1zo+kOjzns8aVw8ivantziMUaO2ekPjgXT2wDuD/4C3HU/BCwlq/PmLH0OE5wY2OA9SKzeZi/qjRxfv8gm8T9Ja7GN7ZZFquvNmTv7zh4z2ePFTUPdw6xWGLnjMYUmIvVJs6ojeuafX1u9xyjxpJ5OR0xj80kn3kEDaHCSqBgW9/YZlmsvqEqazdecKN2GyZuHmPaGGWxc46IqaIaszMR33nDjNm4Y58WxozVn9e0eGF9yGMekjDmnat3JyuRsjap3Dvb+v4xoHCssXNG6oNzCcQWYNSG712vOZ483Ph6ZgKbQrJ5mO/HveToJaMg/VyDacawzWGt/hjQQCyxc46Jqa0z5uKPzc+4DV+ibwDd+XzmNHos77WFTSPBPNLRSe/LypZ6QwabxOoXT3wOANvBUs2jutMO3YlW3zzicwDYDpZsHjHWwTxWCfe1p1J4faa2HyLnWLCOrJh5AMC6gHkAQBKYBwAkgXkAQBKYR0v1Yez4D/2M/+pifa8l8qGu9zswC2buc87xX5j4ktjGkmAe3SbrFEosSbolb5REwt/fCM1hFc0jECvmAQsg2TyszVF/O9G3YWRTjvpW4g3G/vakPUf/HEIbKmIeC2Yx6415QJ885iHou5snwaR8DZJnyDz8c1hN81jMemMe0CefeZjl1mNyqL0kZPfqU23cpq1d1/WN1cup6999aJkJb/cx66zfkLjSie+bg7GhLOOMxGi1TYu3qivXV/4Pn+v6oPEJ1jmH+gr2eas6Kav7O/H3jp3+WpZ5+MaHdWQJ5lEidx+rQ5VA/cSpxrA2in4lao4j9b1EbvCczxpXDs16zxy9c/Cdd0KMyfHWG7CJJ7be1nmG+nrOqwnNtcQztnlqbcyteUi9EadvnWFtKG677Ta1t7fnNQ7RNPMwE8PESD5Bktv7KOsb2yyL1VfJu5w/BmQcWxsoEqNvI0+OV/q5m9A8dmLtnTPQN3hdQnMtMY99/c0y+beer62+WcE6kM88golXYW3OYFvf2GZZrL6hKlvsHwMKbahIjO7m00yNN2YeTqyrZB7e8WEdyWMekhRmQuqEspNZl7WJI8lojrGOfwwotKHiMbZtk+OV+oABNJixWvEN9a3O24XeXBd3rl1/+/q4/eu1CF73smTW9IV1I9k8rEdPYxNqnASrcBJct2nGaBKoGns9/hiQu6FGzsFqmxqv1Jnr66ytxiizzhnp670uxlxL2rUptVPO05yPNrm2fzmufDBrrqE1vm0ksF4kmEc6OukGs6XeeMEmsfrFE59DBMc8FsncsQIMsFTzcO9gfVbfPOJzGEZvaPdJbWHMFyvAEMWtt966RPOIsQ7mkUj7OM9mhs1gxcwDANaFYmdnR505c8ZrHCLMAwB8FN9884366KOPvMYhwjwAwAfmAQBJYB4AkATmAQBJYB4AkATmAQBJFF9//TXmAQCTwTwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIAnMAwCSwDwAIIni8uXL6sMPP/QahwjzAAAfmAcAJIF5AEASmAcAJIF5AEASmAcAJFFcunRJvffee17jEGEeAOAD8wCAJDAPAEgC8wCAJDAPAEgC8wCAJDAPAEgC8wCAJDAPAEgC8wCAJDAPAEgC8wCAJIrPPvtMvfvuu17jEGEeAOCjODo6Uu+//77XOESYBwD0Uer/KznN8s+5aXgAAAAASUVORK5CYII=" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>配置VC++库目录</p><figure><a href="./all_images/1710811986563.jpg"><img src="/assets/1710811986563-Bkrb-Uc4.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>然后在链接器-&gt;输入-&gt;附加依赖项中添加</p><figure><a href="./all_images/1710812099185.jpg"><img src="/assets/1710812099185-BrPaxlCU.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="代码测试" tabindex="-1"><a class="header-anchor" href="#代码测试"><span>代码测试</span></a></h2><p>需要写代码测试库配置的情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TestRedis() {</span></span>
<span class="line"><span>    //连接redis 需要启动才可以进行连接</span></span>
<span class="line"><span>//redis默认监听端口为6387 可以再配置文件中修改</span></span>
<span class="line"><span>    redisContext* c = redisConnect(&quot;127.0.0.1&quot;, 6380);</span></span>
<span class="line"><span>    if (c-&gt;err)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Connect to redisServer faile:%s\\n&quot;, c-&gt;errstr);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;Connect to redisServer Success\\n&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::string redis_password = &quot;123456&quot;;</span></span>
<span class="line"><span>    redisReply* r = (redisReply*)redisCommand(c, &quot;AUTH %s&quot;, redis_password);</span></span>
<span class="line"><span>     if (r-&gt;type == REDIS_REPLY_ERROR) {</span></span>
<span class="line"><span>         printf(&quot;Redis认证失败！\\n&quot;);</span></span>
<span class="line"><span>    }else {</span></span>
<span class="line"><span>        printf(&quot;Redis认证成功！\\n&quot;);</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //为redis设置key</span></span>
<span class="line"><span>    const char* command1 = &quot;set stest1 value1&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行redis命令行</span></span>
<span class="line"><span>    r = (redisReply*)redisCommand(c, command1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果返回NULL则说明执行失败</span></span>
<span class="line"><span>    if (NULL == r)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Execut command1 failure\\n&quot;);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果执行失败则释放连接</span></span>
<span class="line"><span>    if (!(r-&gt;type == REDIS_REPLY_STATUS &amp;&amp; (strcmp(r-&gt;str, &quot;OK&quot;) == 0 || strcmp(r-&gt;str, &quot;ok&quot;) == 0)))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Failed to execute command[%s]\\n&quot;, command1);</span></span>
<span class="line"><span>        freeReplyObject(r);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>    freeReplyObject(r);</span></span>
<span class="line"><span>    printf(&quot;Succeed to execute command[%s]\\n&quot;, command1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const char* command2 = &quot;strlen stest1&quot;;</span></span>
<span class="line"><span>    r = (redisReply*)redisCommand(c, command2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果返回类型不是整形 则释放连接</span></span>
<span class="line"><span>    if (r-&gt;type != REDIS_REPLY_INTEGER)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Failed to execute command[%s]\\n&quot;, command2);</span></span>
<span class="line"><span>        freeReplyObject(r);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //获取字符串长度</span></span>
<span class="line"><span>    int length = r-&gt;integer;</span></span>
<span class="line"><span>    freeReplyObject(r);</span></span>
<span class="line"><span>    printf(&quot;The length of &#39;stest1&#39; is %d.\\n&quot;, length);</span></span>
<span class="line"><span>    printf(&quot;Succeed to execute command[%s]\\n&quot;, command2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //获取redis键值对信息</span></span>
<span class="line"><span>    const char* command3 = &quot;get stest1&quot;;</span></span>
<span class="line"><span>    r = (redisReply*)redisCommand(c, command3);</span></span>
<span class="line"><span>    if (r-&gt;type != REDIS_REPLY_STRING)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Failed to execute command[%s]\\n&quot;, command3);</span></span>
<span class="line"><span>        freeReplyObject(r);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    printf(&quot;The value of &#39;stest1&#39; is %s\\n&quot;, r-&gt;str);</span></span>
<span class="line"><span>    freeReplyObject(r);</span></span>
<span class="line"><span>    printf(&quot;Succeed to execute command[%s]\\n&quot;, command3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const char* command4 = &quot;get stest2&quot;;</span></span>
<span class="line"><span>    r = (redisReply*)redisCommand(c, command4);</span></span>
<span class="line"><span>    if (r-&gt;type != REDIS_REPLY_NIL)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        printf(&quot;Failed to execute command[%s]\\n&quot;, command4);</span></span>
<span class="line"><span>        freeReplyObject(r);</span></span>
<span class="line"><span>        redisFree(c);        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    freeReplyObject(r);</span></span>
<span class="line"><span>    printf(&quot;Succeed to execute command[%s]\\n&quot;, command4);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //释放连接资源</span></span>
<span class="line"><span>    redisFree(c);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在主函数中调用TestRedis，编译项目时发现编译失败，提示</p><figure><a href="./all_images/1710812579501.jpg"><img src="/assets/1710812579501-CZhN5mbv.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在同时使用Redis连接和socket连接时，遇到了Win32_Interop.lib和WS2_32.lib冲突的问题, 因为底层用了socket作为网络通信，也用redis，导致两个库冲突。</p><p>引起原因主要是Redis库Win32_FDAPI.cpp有重新定义了socket的一些方法引起来冲突</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>extern &quot;C&quot; {</span></span>
<span class="line"><span>// Unix compatible FD based routines</span></span>
<span class="line"><span>fdapi_accept accept = NULL;</span></span>
<span class="line"><span>fdapi_access access = NULL;</span></span>
<span class="line"><span>fdapi_bind bind = NULL;</span></span>
<span class="line"><span>fdapi_connect connect = NULL;</span></span>
<span class="line"><span>fdapi_fcntl fcntl = NULL;</span></span>
<span class="line"><span>fdapi_fstat fdapi_fstat64 = NULL;</span></span>
<span class="line"><span>fdapi_fsync fsync = NULL;</span></span>
<span class="line"><span>fdapi_ftruncate ftruncate = NULL;</span></span>
<span class="line"><span>fdapi_freeaddrinfo freeaddrinfo = NULL;</span></span>
<span class="line"><span>fdapi_getaddrinfo getaddrinfo = NULL;</span></span>
<span class="line"><span>fdapi_getpeername getpeername = NULL;</span></span>
<span class="line"><span>fdapi_getsockname getsockname = NULL;</span></span>
<span class="line"><span>fdapi_getsockopt getsockopt = NULL;</span></span>
<span class="line"><span>fdapi_htonl htonl = NULL;</span></span>
<span class="line"><span>fdapi_htons htons = NULL;</span></span>
<span class="line"><span>fdapi_isatty isatty = NULL;</span></span>
<span class="line"><span>fdapi_inet_ntop inet_ntop = NULL;</span></span>
<span class="line"><span>fdapi_inet_pton inet_pton = NULL;</span></span>
<span class="line"><span>fdapi_listen listen = NULL;</span></span>
<span class="line"><span>fdapi_lseek64 lseek64 = NULL;</span></span>
<span class="line"><span>fdapi_ntohl ntohl = NULL;</span></span>
<span class="line"><span>fdapi_ntohs ntohs = NULL;</span></span>
<span class="line"><span>fdapi_open open = NULL;</span></span>
<span class="line"><span>fdapi_pipe pipe = NULL;</span></span>
<span class="line"><span>fdapi_poll poll = NULL;</span></span>
<span class="line"><span>fdapi_read read = NULL;</span></span>
<span class="line"><span>fdapi_select select = NULL;</span></span>
<span class="line"><span>fdapi_setsockopt setsockopt = NULL;</span></span>
<span class="line"><span>fdapi_socket socket = NULL;</span></span>
<span class="line"><span>fdapi_write write = NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>auto f_WSACleanup = dllfunctor_stdcall&lt;int&gt;(&quot;ws2_32.dll&quot;, &quot;WSACleanup&quot;);</span></span>
<span class="line"><span>auto f_WSAFDIsSet = dllfunctor_stdcall&lt;int, SOCKET, fd_set*&gt;(&quot;ws2_32.dll&quot;, &quot;__WSAFDIsSet&quot;);</span></span>
<span class="line"><span>auto f_WSAGetLastError = dllfunctor_stdcall&lt;int&gt;(&quot;ws2_32.dll&quot;, &quot;WSAGetLastError&quot;);</span></span>
<span class="line"><span>auto f_WSAGetOverlappedResult = dllfunctor_stdcall&lt;BOOL, SOCKET, LPWSAOVERLAPPED, LPDWORD, BOOL, LPDWORD&gt;(&quot;ws2_32.dll&quot;, &quot;WSAGetOverlappedResult&quot;);</span></span>
<span class="line"><span>auto f_WSADuplicateSocket = dllfunctor_stdcall&lt;int, SOCKET, DWORD, LPWSAPROTOCOL_INFO&gt;(&quot;ws2_32.dll&quot;, &quot;WSADuplicateSocketW&quot;);</span></span>
<span class="line"><span>auto f_WSAIoctl = dllfunctor_stdcall&lt;int, SOCKET, DWORD, LPVOID, DWORD, LPVOID, DWORD, LPVOID, LPWSAOVERLAPPED, LPWSAOVERLAPPED_COMPLETION_ROUTINE&gt;(&quot;ws2_32.dll&quot;, &quot;WSAIoctl&quot;);</span></span>
<span class="line"><span>auto f_WSARecv = dllfunctor_stdcall&lt;int, SOCKET, LPWSABUF, DWORD, LPDWORD, LPDWORD, LPWSAOVERLAPPED, LPWSAOVERLAPPED_COMPLETION_ROUTINE&gt;(&quot;ws2_32.dll&quot;, &quot;WSARecv&quot;);</span></span>
<span class="line"><span>auto f_WSASocket = dllfunctor_stdcall&lt;SOCKET, int, int, int, LPWSAPROTOCOL_INFO, GROUP, DWORD&gt;(&quot;ws2_32.dll&quot;, &quot;WSASocketW&quot;);</span></span>
<span class="line"><span>auto f_WSASend = dllfunctor_stdcall&lt;int, SOCKET, LPWSABUF, DWORD, LPDWORD, DWORD, LPWSAOVERLAPPED, LPWSAOVERLAPPED_COMPLETION_ROUTINE&gt;(&quot;ws2_32.dll&quot;, &quot;WSASend&quot;);</span></span>
<span class="line"><span>auto f_WSAStartup = dllfunctor_stdcall&lt;int, WORD, LPWSADATA&gt;(&quot;ws2_32.dll&quot;, &quot;WSAStartup&quot;);</span></span>
<span class="line"><span>auto f_ioctlsocket = dllfunctor_stdcall&lt;int, SOCKET, long, u_long*&gt;(&quot;ws2_32.dll&quot;, &quot;ioctlsocket&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auto f_accept = dllfunctor_stdcall&lt;SOCKET, SOCKET, struct sockaddr*, int*&gt;(&quot;ws2_32.dll&quot;, &quot;accept&quot;);</span></span>
<span class="line"><span>auto f_bind = dllfunctor_stdcall&lt;int, SOCKET, const struct sockaddr*, int&gt;(&quot;ws2_32.dll&quot;, &quot;bind&quot;);</span></span>
<span class="line"><span>auto f_closesocket = dllfunctor_stdcall&lt;int, SOCKET&gt;(&quot;ws2_32.dll&quot;, &quot;closesocket&quot;);</span></span>
<span class="line"><span>auto f_connect = dllfunctor_stdcall&lt;int, SOCKET, const struct sockaddr*, int&gt;(&quot;ws2_32.dll&quot;, &quot;connect&quot;);</span></span>
<span class="line"><span>auto f_freeaddrinfo = dllfunctor_stdcall&lt;void, addrinfo*&gt;(&quot;ws2_32.dll&quot;, &quot;freeaddrinfo&quot;);</span></span>
<span class="line"><span>auto f_getaddrinfo = dllfunctor_stdcall&lt;int, PCSTR, PCSTR, const ADDRINFOA*, ADDRINFOA**&gt;(&quot;ws2_32.dll&quot;, &quot;getaddrinfo&quot;);</span></span>
<span class="line"><span>auto f_gethostbyname = dllfunctor_stdcall&lt;struct hostent*, const char*&gt;(&quot;ws2_32.dll&quot;, &quot;gethostbyname&quot;);</span></span>
<span class="line"><span>auto f_getpeername = dllfunctor_stdcall&lt;int, SOCKET, struct sockaddr*, int*&gt;(&quot;ws2_32.dll&quot;, &quot;getpeername&quot;);</span></span>
<span class="line"><span>auto f_getsockname = dllfunctor_stdcall&lt;int, SOCKET, struct sockaddr*, int*&gt;(&quot;ws2_32.dll&quot;, &quot;getsockname&quot;);</span></span>
<span class="line"><span>auto f_getsockopt = dllfunctor_stdcall&lt;int, SOCKET, int, int, char*, int*&gt;(&quot;ws2_32.dll&quot;, &quot;getsockopt&quot;);</span></span>
<span class="line"><span>auto f_htonl = dllfunctor_stdcall&lt;u_long, u_long&gt;(&quot;ws2_32.dll&quot;, &quot;htonl&quot;);</span></span>
<span class="line"><span>auto f_htons = dllfunctor_stdcall&lt;u_short, u_short&gt;(&quot;ws2_32.dll&quot;, &quot;htons&quot;);</span></span>
<span class="line"><span>auto f_listen = dllfunctor_stdcall&lt;int, SOCKET, int&gt;(&quot;ws2_32.dll&quot;, &quot;listen&quot;);</span></span>
<span class="line"><span>auto f_ntohs = dllfunctor_stdcall&lt;u_short, u_short&gt;(&quot;ws2_32.dll&quot;, &quot;ntohs&quot;);</span></span>
<span class="line"><span>auto f_ntohl = dllfunctor_stdcall&lt;u_long, u_long&gt;(&quot;ws2_32.dll&quot;, &quot;ntohl&quot;);</span></span>
<span class="line"><span>auto f_recv = dllfunctor_stdcall&lt;int, SOCKET, char*, int, int&gt;(&quot;ws2_32.dll&quot;, &quot;recv&quot;);</span></span>
<span class="line"><span>auto f_select = dllfunctor_stdcall&lt;int, int, fd_set*, fd_set*, fd_set*, const struct timeval*&gt;(&quot;ws2_32.dll&quot;, &quot;select&quot;);</span></span>
<span class="line"><span>auto f_send = dllfunctor_stdcall&lt;int, SOCKET, const char*, int, int&gt;(&quot;ws2_32.dll&quot;, &quot;send&quot;);</span></span>
<span class="line"><span>auto f_setsockopt = dllfunctor_stdcall&lt;int, SOCKET, int, int, const char*, int&gt;(&quot;ws2_32.dll&quot;, &quot;setsockopt&quot;);</span></span>
<span class="line"><span>auto f_socket = dllfunctor_stdcall&lt;SOCKET, int, int, int&gt;(&quot;ws2_32.dll&quot;, &quot;socket&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去掉Redis库里面的socket的函数的重定义，把所有使用这些方法的地方都改为下面对应的函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>int FDAPI_accept(int rfd, struct sockaddr *addr, socklen_t *addrlen);</span></span>
<span class="line"><span>int FDAPI_access(const char *pathname, int mode);</span></span>
<span class="line"><span>int FDAPI_bind(int rfd, const struct sockaddr *addr, socklen_t addrlen);</span></span>
<span class="line"><span>int FDAPI_connect(int rfd, const struct sockaddr *addr, size_t addrlen);</span></span>
<span class="line"><span>int FDAPI_fcntl(int rfd, int cmd, int flags);</span></span>
<span class="line"><span>int FDAPI_fstat64(int rfd, struct __stat64 *buffer);</span></span>
<span class="line"><span>void FDAPI_freeaddrinfo(struct addrinfo *ai);</span></span>
<span class="line"><span>int FDAPI_fsync(int rfd);</span></span>
<span class="line"><span>int FDAPI_ftruncate(int rfd, PORT_LONGLONG length);</span></span>
<span class="line"><span>int FDAPI_getaddrinfo(const char *node, const char *service, const struct addrinfo *hints, struct addrinfo **res);</span></span>
<span class="line"><span>int FDAPI_getsockopt(int rfd, int level, int optname, void *optval, socklen_t *optlen);</span></span>
<span class="line"><span>int FDAPI_getpeername(int rfd, struct sockaddr *addr, socklen_t * addrlen);</span></span>
<span class="line"><span>int FDAPI_getsockname(int rfd, struct sockaddr* addrsock, int* addrlen);</span></span>
<span class="line"><span>u_long FDAPI_htonl(u_long hostlong);</span></span>
<span class="line"><span>u_short FDAPI_htons(u_short hostshort);</span></span>
<span class="line"><span>u_int FDAPI_ntohl(u_int netlong);</span></span>
<span class="line"><span>u_short FDAPI_ntohs(u_short netshort);</span></span>
<span class="line"><span>int FDAPI_open(const char * _Filename, int _OpenFlag, int flags);</span></span>
<span class="line"><span>int FDAPI_pipe(int *pfds);</span></span>
<span class="line"><span>int FDAPI_poll(struct pollfd *fds, nfds_t nfds, int timeout);</span></span>
<span class="line"><span>int FDAPI_listen(int rfd, int backlog);</span></span>
<span class="line"><span>int FDAPI_socket(int af, int type, int protocol);</span></span>
<span class="line"><span>int FDAPI_select(int nfds, fd_set *readfds, fd_set *writefds, fd_set *exceptfds, struct timeval *timeout);</span></span>
<span class="line"><span>int FDAPI_setsockopt(int rfd, int level, int optname, const void *optval, socklen_t optlen);</span></span>
<span class="line"><span>ssize_t FDAPI_read(int rfd, void *buf, size_t count);</span></span>
<span class="line"><span>ssize_t FDAPI_write(int rfd, const void *buf, size_t count);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次编译生成hredis和Win32_Interop的lib库，重新配置下，项目再次编译就通过了。</p><h2 id="封装redis操作类" tabindex="-1"><a class="header-anchor" href="#封装redis操作类"><span>封装redis操作类</span></a></h2><p>因为hredis提供的操作太别扭了，手动封装redis操作类，简化调用流程。</p><p>封装的类叫RedisMgr，它是个单例类并且可接受回调，按照之前的风格</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class RedisMgr: public Singleton&lt;RedisMgr&gt;, </span></span>
<span class="line"><span>    public std::enable_shared_from_this&lt;RedisMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class Singleton&lt;RedisMgr&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~RedisMgr();</span></span>
<span class="line"><span>    bool Connect(const std::string&amp; host, int port);</span></span>
<span class="line"><span>    bool Get(const std::string &amp;key, std::string&amp; value);</span></span>
<span class="line"><span>    bool Set(const std::string &amp;key, const std::string &amp;value);</span></span>
<span class="line"><span>    bool Auth(const std::string &amp;password);</span></span>
<span class="line"><span>    bool LPush(const std::string &amp;key, const std::string &amp;value);</span></span>
<span class="line"><span>    bool LPop(const std::string &amp;key, std::string&amp; value);</span></span>
<span class="line"><span>    bool RPush(const std::string&amp; key, const std::string&amp; value);</span></span>
<span class="line"><span>    bool RPop(const std::string&amp; key, std::string&amp; value);</span></span>
<span class="line"><span>    bool HSet(const std::string &amp;key, const std::string  &amp;hkey, const std::string &amp;value);</span></span>
<span class="line"><span>    bool HSet(const char* key, const char* hkey, const char* hvalue, size_t hvaluelen);</span></span>
<span class="line"><span>    std::string HGet(const std::string &amp;key, const std::string &amp;hkey);</span></span>
<span class="line"><span>    bool Del(const std::string &amp;key);</span></span>
<span class="line"><span>    bool ExistsKey(const std::string &amp;key);</span></span>
<span class="line"><span>    void Close();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    RedisMgr();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    redisContext* _connect;</span></span>
<span class="line"><span>    redisReply* _reply;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Connect(const std::string &amp;host, int port)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    this-&gt;_connect = redisConnect(host.c_str(), port);</span></span>
<span class="line"><span>    if (this-&gt;_connect != NULL &amp;&amp; this-&gt;_connect-&gt;err)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;connect error &quot; &lt;&lt; this-&gt;_connect-&gt;errstr &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取key对应的value</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Get(const std::string &amp;key, std::string&amp; value)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>     this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;GET %s&quot;, key.c_str());</span></span>
<span class="line"><span>     if (this-&gt;_reply == NULL) {</span></span>
<span class="line"><span>         std::cout &lt;&lt; &quot;[ GET  &quot; &lt;&lt; key &lt;&lt; &quot; ] failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>         freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>          return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (this-&gt;_reply-&gt;type != REDIS_REPLY_STRING) {</span></span>
<span class="line"><span>         std::cout &lt;&lt; &quot;[ GET  &quot; &lt;&lt; key &lt;&lt; &quot; ] failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>         freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>         return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     value = this-&gt;_reply-&gt;str;</span></span>
<span class="line"><span>     freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     std::cout &lt;&lt; &quot;Succeed to execute command [ GET &quot; &lt;&lt; key &lt;&lt; &quot;  ]&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>     return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置key和value</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Set(const std::string &amp;key, const std::string &amp;value){</span></span>
<span class="line"><span>    //执行redis命令行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;SET %s %s&quot;, key.c_str(), value.c_str());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果返回NULL则说明执行失败</span></span>
<span class="line"><span>    if (NULL == this-&gt;_reply)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ SET &quot; &lt;&lt; key &lt;&lt; &quot;  &quot;&lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //如果执行失败则释放连接</span></span>
<span class="line"><span>    if (!(this-&gt;_reply-&gt;type == REDIS_REPLY_STATUS &amp;&amp; (strcmp(this-&gt;_reply-&gt;str, &quot;OK&quot;) == 0 || strcmp(this-&gt;_reply-&gt;str, &quot;ok&quot;) == 0)))</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ SET &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);     </span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ SET &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>密码认证</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Auth(const std::string &amp;password)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;AUTH %s&quot;, password.c_str());</span></span>
<span class="line"><span>    if (this-&gt;_reply-&gt;type == REDIS_REPLY_ERROR) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;认证失败&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;认证成功&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左侧push</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::LPush(const std::string &amp;key, const std::string &amp;value)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;LPUSH %s %s&quot;, key.c_str(), value.c_str());</span></span>
<span class="line"><span>    if (NULL == this-&gt;_reply)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ LPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (this-&gt;_reply-&gt;type != REDIS_REPLY_INTEGER || this-&gt;_reply-&gt;integer &lt;= 0) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ LPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ LPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左侧pop</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::LPop(const std::string &amp;key, std::string&amp; value){</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;LPOP %s &quot;, key.c_str());</span></span>
<span class="line"><span>    if (_reply == nullptr || _reply-&gt;type == REDIS_REPLY_NIL) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ LPOP &quot; &lt;&lt; key&lt;&lt;  &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    value = _reply-&gt;str;</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ LPOP &quot; &lt;&lt; key &lt;&lt;  &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>右侧push</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::RPush(const std::string&amp; key, const std::string&amp; value) {</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;RPUSH %s %s&quot;, key.c_str(), value.c_str());</span></span>
<span class="line"><span>    if (NULL == this-&gt;_reply)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ RPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (this-&gt;_reply-&gt;type != REDIS_REPLY_INTEGER || this-&gt;_reply-&gt;integer &lt;= 0) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ RPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ RPUSH &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>右侧pop</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::RPop(const std::string&amp; key, std::string&amp; value) {</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;RPOP %s &quot;, key.c_str());</span></span>
<span class="line"><span>    if (_reply == nullptr || _reply-&gt;type == REDIS_REPLY_NIL) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ RPOP &quot; &lt;&lt; key &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    value = _reply-&gt;str;</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ RPOP &quot; &lt;&lt; key &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HSet操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::HSet(const std::string &amp;key, const std::string &amp;hkey, const std::string &amp;value) {</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;HSET %s %s %s&quot;, key.c_str(), hkey.c_str(), value.c_str());</span></span>
<span class="line"><span>    if (_reply == nullptr || _reply-&gt;type != REDIS_REPLY_INTEGER ) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ HSet &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; hkey &lt;&lt;&quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ HSet &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; hkey &lt;&lt; &quot;  &quot; &lt;&lt; value &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool RedisMgr::HSet(const char* key, const char* hkey, const char* hvalue, size_t hvaluelen)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>     const char* argv[4];</span></span>
<span class="line"><span>     size_t argvlen[4];</span></span>
<span class="line"><span>     argv[0] = &quot;HSET&quot;;</span></span>
<span class="line"><span>    argvlen[0] = 4;</span></span>
<span class="line"><span>    argv[1] = key;</span></span>
<span class="line"><span>    argvlen[1] = strlen(key);</span></span>
<span class="line"><span>    argv[2] = hkey;</span></span>
<span class="line"><span>    argvlen[2] = strlen(hkey);</span></span>
<span class="line"><span>    argv[3] = hvalue;</span></span>
<span class="line"><span>    argvlen[3] = hvaluelen;</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommandArgv(this-&gt;_connect, 4, argv, argvlen);</span></span>
<span class="line"><span>    if (_reply == nullptr || _reply-&gt;type != REDIS_REPLY_INTEGER) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ HSet &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; hkey &lt;&lt; &quot;  &quot; &lt;&lt; hvalue &lt;&lt; &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ HSet &quot; &lt;&lt; key &lt;&lt; &quot;  &quot; &lt;&lt; hkey &lt;&lt; &quot;  &quot; &lt;&lt; hvalue &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HGet操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::string RedisMgr::HGet(const std::string &amp;key, const std::string &amp;hkey)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    const char* argv[3];</span></span>
<span class="line"><span>    size_t argvlen[3];</span></span>
<span class="line"><span>    argv[0] = &quot;HGET&quot;;</span></span>
<span class="line"><span>    argvlen[0] = 4;</span></span>
<span class="line"><span>    argv[1] = key.c_str();</span></span>
<span class="line"><span>    argvlen[1] = key.length();</span></span>
<span class="line"><span>    argv[2] = hkey.c_str();</span></span>
<span class="line"><span>    argvlen[2] = hkey.length();</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommandArgv(this-&gt;_connect, 3, argv, argvlen);</span></span>
<span class="line"><span>    if (this-&gt;_reply == nullptr || this-&gt;_reply-&gt;type == REDIS_REPLY_NIL) {</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ HGet &quot; &lt;&lt; key &lt;&lt; &quot; &quot;&lt;&lt; hkey &lt;&lt;&quot;  ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return &quot;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::string value = this-&gt;_reply-&gt;str;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ HGet &quot; &lt;&lt; key &lt;&lt; &quot; &quot; &lt;&lt; hkey &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    return value;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Del 操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Del(const std::string &amp;key)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;DEL %s&quot;, key.c_str());</span></span>
<span class="line"><span>    if (this-&gt;_reply == nullptr || this-&gt;_reply-&gt;type != REDIS_REPLY_INTEGER) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Execut command [ Del &quot; &lt;&lt; key &lt;&lt;  &quot; ] failure ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Execut command [ Del &quot; &lt;&lt; key &lt;&lt; &quot; ] success ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>     freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>     return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断键值是否存在</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::ExistsKey(const std::string &amp;key)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    this-&gt;_reply = (redisReply*)redisCommand(this-&gt;_connect, &quot;exists %s&quot;, key.c_str());</span></span>
<span class="line"><span>    if (this-&gt;_reply == nullptr || this-&gt;_reply-&gt;type != REDIS_REPLY_INTEGER || this-&gt;_reply-&gt;integer == 0) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Not Found [ Key &quot; &lt;&lt; key &lt;&lt; &quot; ]  ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot; Found [ Key &quot; &lt;&lt; key &lt;&lt; &quot; ] exists ! &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>    freeReplyObject(this-&gt;_reply);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RedisMgr::Close()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    redisFree(_connect);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试用例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TestRedisMgr() {</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Connect(&quot;127.0.0.1&quot;, 6380));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Auth(&quot;123456&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Set(&quot;blogwebsite&quot;,&quot;llfc.club&quot;));</span></span>
<span class="line"><span>    std::string value=&quot;&quot;;</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Get(&quot;blogwebsite&quot;, value) );</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Get(&quot;nonekey&quot;, value) == false);</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;HSet(&quot;bloginfo&quot;,&quot;blogwebsite&quot;, &quot;llfc.club&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;HGet(&quot;bloginfo&quot;,&quot;blogwebsite&quot;) != &quot;&quot;);</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;ExistsKey(&quot;bloginfo&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Del(&quot;bloginfo&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;Del(&quot;bloginfo&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;ExistsKey(&quot;bloginfo&quot;) == false);</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;LPush(&quot;lpushkey1&quot;, &quot;lpushvalue1&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;LPush(&quot;lpushkey1&quot;, &quot;lpushvalue2&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;LPush(&quot;lpushkey1&quot;, &quot;lpushvalue3&quot;));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;RPop(&quot;lpushkey1&quot;, value));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;RPop(&quot;lpushkey1&quot;, value));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;LPop(&quot;lpushkey1&quot;, value));</span></span>
<span class="line"><span>    assert(RedisMgr::GetInstance()-&gt;LPop(&quot;lpushkey2&quot;, value)==false);</span></span>
<span class="line"><span>    RedisMgr::GetInstance()-&gt;Close();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装redis连接池" tabindex="-1"><a class="header-anchor" href="#封装redis连接池"><span>封装redis连接池</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class RedisConPool {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    RedisConPool(size_t poolSize, const char* host, int port, const char* pwd)</span></span>
<span class="line"><span>        : poolSize_(poolSize), host_(host), port_(port), b_stop_(false){</span></span>
<span class="line"><span>        for (size_t i = 0; i &lt; poolSize_; ++i) {</span></span>
<span class="line"><span>            auto* context = redisConnect(host, port);</span></span>
<span class="line"><span>            if (context == nullptr || context-&gt;err != 0) {</span></span>
<span class="line"><span>                if (context != nullptr) {</span></span>
<span class="line"><span>                    redisFree(context);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            auto reply = (redisReply*)redisCommand(context, &quot;AUTH %s&quot;, pwd);</span></span>
<span class="line"><span>            if (reply-&gt;type == REDIS_REPLY_ERROR) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;认证失败&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>                //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>                freeReplyObject(reply);</span></span>
<span class="line"><span>                continue;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //执行成功 释放redisCommand执行后返回的redisReply所占用的内存</span></span>
<span class="line"><span>            freeReplyObject(reply);</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;认证成功&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>            connections_.push(context);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~RedisConPool() {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        while (!connections_.empty()) {</span></span>
<span class="line"><span>            connections_.pop();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    redisContext* getConnection() {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        cond_.wait(lock, [this] { </span></span>
<span class="line"><span>            if (b_stop_) {</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return !connections_.empty(); </span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        //如果停止则直接返回空指针</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return  nullptr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto* context = connections_.front();</span></span>
<span class="line"><span>        connections_.pop();</span></span>
<span class="line"><span>        return context;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void returnConnection(redisContext* context) {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        connections_.push(context);</span></span>
<span class="line"><span>        cond_.notify_one();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void Close() {</span></span>
<span class="line"><span>        b_stop_ = true;</span></span>
<span class="line"><span>        cond_.notify_all();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    atomic&lt;bool&gt; b_stop_;</span></span>
<span class="line"><span>    size_t poolSize_;</span></span>
<span class="line"><span>    const char* host_;</span></span>
<span class="line"><span>    int port_;</span></span>
<span class="line"><span>    std::queue&lt;redisContext*&gt; connections_;</span></span>
<span class="line"><span>    std::mutex mutex_;</span></span>
<span class="line"><span>    std::condition_variable cond_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RedisMgr构造函数中初始化pool连接池</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RedisMgr::RedisMgr() {</span></span>
<span class="line"><span>    auto&amp; gCfgMgr = ConfigMgr::Inst();</span></span>
<span class="line"><span>    auto host = gCfgMgr[&quot;Redis&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    auto port = gCfgMgr[&quot;Redis&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    auto pwd = gCfgMgr[&quot;Redis&quot;][&quot;Passwd&quot;];</span></span>
<span class="line"><span>    _con_pool.reset(new RedisConPool(5, host.c_str(), atoi(port.c_str()), pwd.c_str()));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在析构函数中回收资源</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RedisMgr::~RedisMgr() {</span></span>
<span class="line"><span>    Close();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void RedisMgr::Close() {</span></span>
<span class="line"><span>    _con_pool-&gt;Close();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用的时候改为从Pool中获取链接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool RedisMgr::Get(const std::string&amp; key, std::string&amp; value)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto connect = _con_pool-&gt;getConnection();</span></span>
<span class="line"><span>    if (connect == nullptr) {</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>     auto reply = (redisReply*)redisCommand(connect, &quot;GET %s&quot;, key.c_str());</span></span>
<span class="line"><span>     if (reply == NULL) {</span></span>
<span class="line"><span>         std::cout &lt;&lt; &quot;[ GET  &quot; &lt;&lt; key &lt;&lt; &quot; ] failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>         freeReplyObject(reply);</span></span>
<span class="line"><span>         _con_pool-&gt;returnConnection(connect);</span></span>
<span class="line"><span>          return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     if (reply-&gt;type != REDIS_REPLY_STRING) {</span></span>
<span class="line"><span>         std::cout &lt;&lt; &quot;[ GET  &quot; &lt;&lt; key &lt;&lt; &quot; ] failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>         freeReplyObject(reply);</span></span>
<span class="line"><span>         _con_pool-&gt;returnConnection(connect);</span></span>
<span class="line"><span>         return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     value = reply-&gt;str;</span></span>
<span class="line"><span>     freeReplyObject(reply);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     std::cout &lt;&lt; &quot;Succeed to execute command [ GET &quot; &lt;&lt; key &lt;&lt; &quot;  ]&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>     _con_pool-&gt;returnConnection(connect);</span></span>
<span class="line"><span>     return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="day-10-verifyserver增加redis" tabindex="-1"><a class="header-anchor" href="#day-10-verifyserver增加redis"><span>Day 10：VerifyServer增加redis</span></a></h1><h2 id="verifyserver增加redis" tabindex="-1"><a class="header-anchor" href="#verifyserver增加redis"><span>VerifyServer增加redis</span></a></h2><p>为了让验证码有一个过期时间，可以利用redis实现，在Verify文件夹用npm安装redis服务。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>npm install ioredis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完善config.json</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;email&quot;: {</span></span>
<span class="line"><span>      &quot;user&quot;: &quot;secondtonone1@163.com&quot;,</span></span>
<span class="line"><span>      &quot;pass&quot;: &quot;CRWTAZOSNCWDDQQTllfc&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;mysql&quot;: {</span></span>
<span class="line"><span>      &quot;host&quot;: &quot;81.68.86.146&quot;,</span></span>
<span class="line"><span>      &quot;port&quot;: 3308,</span></span>
<span class="line"><span>      &quot;passwd&quot;: &quot;123456&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &quot;redis&quot;:{</span></span>
<span class="line"><span>      &quot;host&quot;: &quot;81.68.86.146&quot;,</span></span>
<span class="line"><span>      &quot;port&quot;: 6380,</span></span>
<span class="line"><span>      &quot;passwd&quot;: &quot;123456&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务里添加redis模块，封装redis操作在redis.js中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const config_module = require(&#39;./config&#39;)</span></span>
<span class="line"><span>const Redis = require(&quot;ioredis&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建Redis客户端实例</span></span>
<span class="line"><span>const RedisCli = new Redis({</span></span>
<span class="line"><span>  host: config_module.redis_host,       // Redis服务器主机名</span></span>
<span class="line"><span>  port: config_module.redis_port,        // Redis服务器端口号</span></span>
<span class="line"><span>  password: config_module.redis_passwd, // Redis密码</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 监听错误信息</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>RedisCli.on(&quot;error&quot;, function (err) {</span></span>
<span class="line"><span>  console.log(&quot;RedisCli connect error&quot;);</span></span>
<span class="line"><span>  RedisCli.quit();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 根据key获取value</span></span>
<span class="line"><span> * @param {*} key </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function GetRedis(key) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        const result = await RedisCli.get(key)</span></span>
<span class="line"><span>        if(result === null){</span></span>
<span class="line"><span>          console.log(&#39;result:&#39;,&#39;&lt;&#39;+result+&#39;&gt;&#39;, &#39;This key cannot be find...&#39;)</span></span>
<span class="line"><span>          return null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(&#39;Result:&#39;,&#39;&lt;&#39;+result+&#39;&gt;&#39;,&#39;Get key success!...&#39;);</span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span>    }catch(error){</span></span>
<span class="line"><span>        console.log(&#39;GetRedis error is&#39;, error);</span></span>
<span class="line"><span>        return null</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 根据key查询redis中是否存在key</span></span>
<span class="line"><span> * @param {*} key </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function QueryRedis(key) {</span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        const result = await RedisCli.exists(key)</span></span>
<span class="line"><span>        //  判断该值是否为空 如果为空返回null</span></span>
<span class="line"><span>        if (result === 0) {</span></span>
<span class="line"><span>          console.log(&#39;result:&lt;&#39;,&#39;&lt;&#39;+result+&#39;&gt;&#39;,&#39;This key is null...&#39;);</span></span>
<span class="line"><span>          return null</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        console.log(&#39;Result:&#39;,&#39;&lt;&#39;+result+&#39;&gt;&#39;,&#39;With this value!...&#39;);</span></span>
<span class="line"><span>        return result</span></span>
<span class="line"><span>    }catch(error){</span></span>
<span class="line"><span>        console.log(&#39;QueryRedis error is&#39;, error);</span></span>
<span class="line"><span>        return null</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 设置key和value，并过期时间</span></span>
<span class="line"><span> * @param {*} key </span></span>
<span class="line"><span> * @param {*} value </span></span>
<span class="line"><span> * @param {*} exptime </span></span>
<span class="line"><span> * @returns </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function SetRedisExpire(key,value, exptime){</span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        // 设置键和值</span></span>
<span class="line"><span>        await RedisCli.set(key,value)</span></span>
<span class="line"><span>        // 设置过期时间（以秒为单位）</span></span>
<span class="line"><span>        await RedisCli.expire(key, exptime);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }catch(error){</span></span>
<span class="line"><span>        console.log(&#39;SetRedisExpire error is&#39;, error);</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 退出函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function Quit(){</span></span>
<span class="line"><span>    RedisCli.quit();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = {GetRedis, QueryRedis, Quit, SetRedisExpire,}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server.js中包含redis.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const redis_module = require(&#39;./redis&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>获取验证码之前可以先查询redis，如果没查到就生成uid并且写入redis</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>async function GetVarifyCode(call, callback) {</span></span>
<span class="line"><span>    console.log(&quot;email is &quot;, call.request.email)</span></span>
<span class="line"><span>    try{</span></span>
<span class="line"><span>        let query_res = await redis_module.GetRedis(const_module.code_prefix+call.request.email);</span></span>
<span class="line"><span>        console.log(&quot;query_res is &quot;, query_res)</span></span>
<span class="line"><span>        if(query_res == null){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        let uniqueId = query_res;</span></span>
<span class="line"><span>        if(query_res ==null){</span></span>
<span class="line"><span>            uniqueId = uuidv4();</span></span>
<span class="line"><span>            if (uniqueId.length &gt; 4) {</span></span>
<span class="line"><span>                uniqueId = uniqueId.substring(0, 4);</span></span>
<span class="line"><span>            } </span></span>
<span class="line"><span>            let bres = await redis_module.SetRedisExpire(const_module.code_prefix+call.request.email, uniqueId,600)</span></span>
<span class="line"><span>            if(!bres){</span></span>
<span class="line"><span>                callback(null, { email:  call.request.email,</span></span>
<span class="line"><span>                    error:const_module.Errors.RedisErr</span></span>
<span class="line"><span>                });</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        console.log(&quot;uniqueId is &quot;, uniqueId)</span></span>
<span class="line"><span>        let text_str =  &#39;您的验证码为&#39;+ uniqueId +&#39;请三分钟内完成注册&#39;</span></span>
<span class="line"><span>        //发送邮件</span></span>
<span class="line"><span>        let mailOptions = {</span></span>
<span class="line"><span>            from: &#39;secondtonone1@163.com&#39;,</span></span>
<span class="line"><span>            to: call.request.email,</span></span>
<span class="line"><span>            subject: &#39;验证码&#39;,</span></span>
<span class="line"><span>            text: text_str,</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        let send_res = await emailModule.SendMail(mailOptions);</span></span>
<span class="line"><span>        console.log(&quot;send res is &quot;, send_res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callback(null, { email:  call.request.email,</span></span>
<span class="line"><span>            error:const_module.Errors.Success</span></span>
<span class="line"><span>        }); </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }catch(error){</span></span>
<span class="line"><span>        console.log(&quot;catch error is &quot;, error)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        callback(null, { email:  call.request.email,</span></span>
<span class="line"><span>            error:const_module.Errors.Exception</span></span>
<span class="line"><span>        }); </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证服务联调" tabindex="-1"><a class="header-anchor" href="#验证服务联调"><span>验证服务联调</span></a></h2><p>开启VerifyServer和GateServer，再启动客户端，点击获取验证码，客户端就会发送请求给GateServer，GateServer再调用内部服务VerifyServer。最后将请求返回客户端，完成了验证码发送的流程。</p><p>如果10分钟之内多次请求，因为验证码被缓存在redis中，所以会被复用返回给客户端。</p><figure><a href="./all_images/1711079058273.jpg"><img src="/assets/1711079058273-BDybNax2.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>看起来客户端收到服务器的回复了</p><h1 id="day-11-注册功能" tabindex="-1"><a class="header-anchor" href="#day-11-注册功能"><span>Day 11：注册功能</span></a></h1><h2 id="注册功能" tabindex="-1"><a class="header-anchor" href="#注册功能"><span>注册功能</span></a></h2><p>实现注册功能，先实现客户端发送post请求, 将注册ui中确定按钮改为sure_btn，并为其添加click槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//day11 添加确认槽函数</span></span>
<span class="line"><span>void RegisterDialog::on_sure_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(ui-&gt;user_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        showTip(tr(&quot;用户名不能为空&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ui-&gt;email_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        showTip(tr(&quot;邮箱不能为空&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ui-&gt;pass_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        showTip(tr(&quot;密码不能为空&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ui-&gt;confirm_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        showTip(tr(&quot;确认密码不能为空&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ui-&gt;confirm_edit-&gt;text() != ui-&gt;pass_edit-&gt;text()){</span></span>
<span class="line"><span>        showTip(tr(&quot;密码和确认密码不匹配&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(ui-&gt;varify_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        showTip(tr(&quot;验证码不能为空&quot;), false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //day11 发送http请求注册用户</span></span>
<span class="line"><span>    QJsonObject json_obj;</span></span>
<span class="line"><span>    json_obj[&quot;user&quot;] = ui-&gt;user_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;email&quot;] = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;passwd&quot;] = ui-&gt;pass_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;confirm&quot;] = ui-&gt;confirm_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;varifycode&quot;] = ui-&gt;varify_edit-&gt;text();</span></span>
<span class="line"><span>    HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/user_register&quot;),</span></span>
<span class="line"><span>                 json_obj, ReqId::ID_REG_USER,Modules::REGISTERMOD);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再添加http请求回复后收到处理流程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::initHttpHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //...省略</span></span>
<span class="line"><span>    //注册注册用户回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_REG_USER, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto email = jsonObj[&quot;email&quot;].toString();</span></span>
<span class="line"><span>        showTip(tr(&quot;用户注册成功&quot;), true);</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;email is &quot; &lt;&lt; email ;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server端接受注册请求" tabindex="-1"><a class="header-anchor" href="#server端接受注册请求"><span>Server端接受注册请求</span></a></h2><p>Server注册user_register逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RegPost(&quot;/user_register&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //先查找redis中email对应的验证码是否合理</span></span>
<span class="line"><span>    std::string  varify_code;</span></span>
<span class="line"><span>    bool b_get_varify = RedisMgr::GetInstance()-&gt;Get(src_root[&quot;email&quot;].asString(), varify_code);</span></span>
<span class="line"><span>    if (!b_get_varify) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; get varify code expired&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyExpired;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (varify_code != src_root[&quot;varifycode&quot;].asString()) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; varify code error&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyCodeErr;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //访问redis查找</span></span>
<span class="line"><span>    bool b_usr_exist = RedisMgr::GetInstance()-&gt;ExistsKey(src_root[&quot;user&quot;].asString());</span></span>
<span class="line"><span>    if (b_usr_exist) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; user exist&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::UserExist;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //查找数据库判断用户是否存在</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root[&quot;error&quot;] = 0;</span></span>
<span class="line"><span>    root[&quot;email&quot;] = src_root[&quot;email&quot;];</span></span>
<span class="line"><span>    root [&quot;user&quot;]= src_root[&quot;user&quot;].asString();</span></span>
<span class="line"><span>    root[&quot;passwd&quot;] = src_root[&quot;passwd&quot;].asString();</span></span>
<span class="line"><span>    root[&quot;confirm&quot;] = src_root[&quot;confirm&quot;].asString();</span></span>
<span class="line"><span>    root[&quot;varifycode&quot;] = src_root[&quot;varifycode&quot;].asString();</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>    });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装mysql" tabindex="-1"><a class="header-anchor" href="#安装mysql"><span>安装Mysql</span></a></h2><p>先介绍Windows环境下安装mysql</p><p>点击mysql安装包下载链接：<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql</a></p><p>选择window版本，点击下载按钮，如下所示</p><figure><a href="./all_images/4aa44fdafe578d8f2626d3e280d608f.png"><img src="/assets/4aa44fdafe578d8f2626d3e280d608f-BIJdQfJ6.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>不用登录直接下载</p><figure><a href="./all_images/1711349001944.jpg"><img src="/assets/1711349001944-i4pzqFjB.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>下载好mysql安装包后，将其解压到指定目录，并记下解压的目录，后续用于环境变量配置</p><figure><a href="./all_images/1711349518362.jpg"><img src="/assets/1711349518362-BGR5-r5e.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在bin目录同级下创建一个文件，命名为my.ini<br> 编辑my.ini文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[mysqld]</span></span>
<span class="line"><span># 设置3308端口</span></span>
<span class="line"><span>port=3308</span></span>
<span class="line"><span># 设置mysql的安装目录 ---这里输入你安装的文件路径----</span></span>
<span class="line"><span>basedir=D:\\cppsoft\\mysql</span></span>
<span class="line"><span># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span>datadir=D:\\mysql\\data</span></span>
<span class="line"><span># 允许最大连接数</span></span>
<span class="line"><span>max_connections=200</span></span>
<span class="line"><span># 允许连接失败的次数。</span></span>
<span class="line"><span>max_connect_errors=10</span></span>
<span class="line"><span># 服务端使用的字符集默认为utf8</span></span>
<span class="line"><span>character-set-server=utf8</span></span>
<span class="line"><span># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span>default-storage-engine=INNODB</span></span>
<span class="line"><span># 默认使用“mysql_native_password”插件认证</span></span>
<span class="line"><span>#mysql_native_password</span></span>
<span class="line"><span>default_authentication_plugin=mysql_native_password</span></span>
<span class="line"><span>[mysql]</span></span>
<span class="line"><span># 设置mysql客户端默认字符集</span></span>
<span class="line"><span>default-character-set=utf8</span></span>
<span class="line"><span>[client]</span></span>
<span class="line"><span># 设置mysql客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span>port=3308</span></span>
<span class="line"><span>default-character-set=utf8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两点需要注意修改的：</p><p>A、basedir这里输入的是mysql解压存放的文件路径</p><p>B、datadir这里设置mysql数据库的数据存放目录</p><p>打开cmd进入mysql的bin文件下</p><figure><a href="./all_images/1711349826275.jpg"><img src="/assets/1711349826275-Bl4u5ws9.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>依次执行命令</p><p>第一个命令为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//安装mysql  安装完成后Mysql会有一个随机密码</span></span>
<span class="line"><span>.\\mysqld.exe --initialize --console</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图，随机密码要记住，以后改密码会用到</p><figure><a href="./all_images/83635680847f591980ade3501655f8d.png"><img src="/assets/83635680847f591980ade3501655f8d-Du6cHN9d.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来在cmd执行第二条命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//安装mysql服务并启动   </span></span>
<span class="line"><span>.\\mysqld.exe --install mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现以下情况，说明cmd不是以管理员形式执行的，改用为管理员权限执行即可。</p><figure><a href="./all_images/2872369cb66fa7803e19575be3cd63b.png"><img src="/assets/2872369cb66fa7803e19575be3cd63b-DgjAOOW7.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>成功如下</p><figure><a href="./all_images/87a224f42f4dccb254481470d2f1b8e.png"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAboAAAA1CAYAAAA3Zi48AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAA8LSURBVHhe7Z1bk11VEcfnA/AR5FG+QGKVFg9aFhkzyQQsEAQSQ5IC1ITcCklx8QkxQKgkQzI5M3NmzkwuooKxoIQSSywkN8hlcgP0e1h58qld6ySNnU736rX23jPnkn741Vnr//9377XPZO+uiUUcObN4HU5dvAqfnb8Mx37/Ltxzzz1dFhcX7wB16dOiap6vS9Cuae0p1NPWGrnXaUqnYCZ+UqhH4RqtQWiOf1pUyedmJfj1sJ8ErZNqUj73KJYf4ZkbN250WbFihfhJkTTaq4nzVSH2LenNs3SvrXHPNdQtje5L+kg6r+d7juRxjffTvJRWh9T1S0jV5vbludK6+JkcdLime6rzjEWVfGkNwuvoHvtSaJZmuMb3Ui1i1TetR6JH0TKWpu2pLvVJsdR5SqzNOauk81rupfaWzuE5HFhxiOUMO47WVyL3jKXEviW9aRZrUdPWuMc1BXOUVA7XXKegJ2Xonq81MCNlqWZlJK8pmuidqs/prWVyazE3cnbxSzh98Rp8duFKGHTv3RHm5FwgRd36HKRrUI373JPq0dN0yeMa5iRojubx00KqS8Hrc2oiuTmNXl1H20vX0a6dq2s5BH0phwNLG25xrxF9ra9GSXYpqXKOJs/eL9/DsCF9r6ilvvPoWT8TK0O97qA7dSH8Rjckg24p+5f25nmtvlTvJXXP1Kt7kq5bchYri35uTy1Hh1oVSu4JiTVV6pqk5PpNnxf7NdnTuYn2nab00p9DTk3xoHMcx3GcQcIHneM4jjPUDOSgK/3VdtgY9Pu/G39+//3PO6LuOM7Sc8egw7/v5PDCnIxE1TpO1bphYRDuP3XGuueP9VV7LPd3169Dzodvdfbs2dNF8voF63z9fn6Lkud45NzidTgdhtypC5fh+K3/vEBqQDXLt+DZklqkSk0/Eu9j2O4f7yl1Rs2z6pDcnEad2lL6baDE8yCSzynJ3i3086DDs2nns/x+B5/9kme4LwadpqUozfcj9B5Kv5NBuP+q51+ue1uu6/TrkCg5lw+65afuILLqB3XQISXPb2ODrgSrP9VS16p7jl5jnb+u32uqnn8572upr9XPA8IHXX/jgy5NybNbadBJ+xJy+qOWuo51BqynObrnXo6PoEdJ+Smv1Kc5SdPgvlST6oMez+Ba8rlG0XzaU+treVaOYvl14AMi7jW4L9Wk+qDHM7iWfK4hWEuRchqpWq5bGe71mjggEM3LzUmZlCdluIekvIjlS9BnisN9qSbVBz2ewbXkc01DHXQcXkhzkpdCqmmqD8I9uo9rvsd1rk/3XLP8lEap6lNdWkt1Wo2m8XxODUfzeb9UTtO5p2URy6+C9oKmurSW6rQaTeP5nJqUrmUlcurpPuWltKrQIUHJ9WmOa6hzj+5ze0mapOfmOJavQZ8VaS09S1qNpvF8Tk2K7N/oUjSRL+2BVOll1VTxKVZ9SqNYfsTqW7qW9hzJz9U4dXpp/UuykZRXB+3lrL3kc9bSniP5uZqmW9eklFy/JMu1XlMyYKiWO2BycjGj5az63HNw6PNSupb2HMnP1TS6g+7Mxau1Bl2kpKbuoSlVelk1OT3jnsI9ui/RKJYfsfqWrqlG4R7dl2icOr20/nWzTaG9nKleuqYahXt0X6JpupaViFkJLafpHJ7rNSUDhmtxT6EezUh6hNZVqY9YvgZ9ZkrXVKNwj+5LNI1Kg67uRevWc3it1cu6vuVLVKkv6ZmC5+heW+OeaxqpPiWaBM/V7V+3vglSL2bqaWvcp/pQUn1KNE3XshK52Zire61eUjJgqgyd3P65OY7la9DnRlvjPvcZS/Up0TT6YtBptVHP6StlUtfgfaWs5dM91yw/pVGsngj3tDopxzXULY3uS/pISL2ppvUp0bmm1eagvaApKZ962hr3Up8cje5L+kg6r+d7juRxjffTvJTWa0oGDNUsX9JSa6kWPUlHLF+DPjvaGvfSc5aj0X1JH407Bh02TTWhGSvLKam1fETLYD33cS95uT7HyqQ87lMsP0J9zKOmrXGPawrmKKkcrrlOQU+C+7jXalGnSJ6mUa8K8aWbevFaHq3na56le6pzUjlcc52CnpShe77WwIyUpZqVkbxeg8OFInmaRvdUl9B8qvMM7ino5fgppGdJWuMe1xTMUVI5XHOdgp6G+BvdIJJzs4iVLenVL1Q5c5P3WbfXIH7nGk29mJt8wffbsHCGn356v9x1gy7mkCp+v1Jy3qbvD/vV6dnkeQadpn+LwX4+7JzloO67gIP96vQcmkHnOI7jOBI+6BzHcZyhxged4ziOM9Sog47+vWjdvx+tQi+u6ZRh/XyW8uc3CH8+evn9OI7zf8RBJz2Ay/1Qxuv5i2DpqfI9Y41WZ/lNsNT962Ddv+WX0mQvxxlG+nbQOUsP/ZlW+flaNYP+Z6bu+Zfz+xn079pxlpKRzy9/mTXonOFjkF7kvWCQvp9B/64dZykRB10k5yGlSHqVvaZJpHLUk3wLXo896JpnqUZ1ybN86uX4PJPyczzcaxrqXKNoNbyfpKVI5amek5MyKU/KcA9JeRGrlmL5UsZxnJuogy6iPUA5Gq/V1tLe0iOpHlJdqhfHqs/pX2fPPa7V9VOappfUI3X7W6T6c4/upbpcTdJzc5ySOqpZvuM4t5McdAh/iHIetNSDl5st1RHJt2oodftXqacsdX9Ey1nXT2mUlE89q4+GVifpVa6Xk4sZLWfVl9RRzfIdx7mdkfNh0J0Lg+7M+ctwQhl0Ef6gSWh5CfRTOc3L6S0hZTVStVIvqkk+JceXSGWol+NjJlfP1Sgpn3pWHw2tTtK5FvcU6tGMpEdoXZX6SKpOgvo0r2mO49xEHHTWg5TzUFkZ9FM5zcvt3SS0p9Tf8il1fYkqPbWa3GyVa1Kib2VSaLWSnnOWHE3Sc3OcJuusGse5mwmD7iv4/OI1OHvhShh073VF60HKedByHjwrk/JT15PqrGtRrHrux72kVd1zj2t1/ZQm6XFfUo/k+FYmhVYr6VSzfElLraVa9CQdKamjGvfjnvs84zh3M+qg4/BCzec69Tiax+tzcilP8lPwWqmee1KOZzgpn3rc517TPs/QPfeoLtVKPs1JugXvTfvkaHRPdQnNpzrP4J6CXo4vZVI+3fO14zjKoHOc5cBfxo7jLAc+6Jxlx3/jcBxnOfFB5ziO4ww1I18sfumDznEcxxlaBnLQ3e1/7TXo9+9/bek4znJyx6DD//2EwwtzMhJV6zhV64aFQbj/1Bnrnj/WV+0xCN+d4zjN0f0nwM5euganw6A7/oebv9FJLwKqWb4Fz5bUIlVq+pF4H8N2/3hPqTNqnlWH5OY06tQ6jjNY9MWg07QUpfl+hN5D6XcyCPdf9fzLdW+D8B06jlOfxgZdCVZ/qqWuVfccvcY6f12/11Q9/3LeV79/h47j1GfkiytffTPoTvzxT11Revi5VucFkdMftdR1rDNgPc3RPfdyfAQ9SspPeaU+zUmaBvelmlQf9HgG15LPNYrm055aX8uzchTLdxxnsOkOunOL17v/Vz100HF4Ic1JXgqppqk+CPfoPq75Hte5Pt1zzfJTGqWqT3VpLdVpNZrG8zk1HM3n/VI5TeeelkUs33GcwWXk/NWvu4Mu/kb3zrsn4dv33Vf80DeRr/qiqdLLqqniU6z6lEax/IjVt3Qt7TmSn6tx6vTS+pdkIynPcZzB5+a/jHLpOpy7cBX+/MFH8P0f/LDSg19SU/oiSlGll1WT0zPuKdyj+xKNYvkRq2/pmmoU7tF9icap00vrXzfrOM5wMXLhyteA/y3dR3/7B2zYuMl8+EteJBJ16zm81uplXd/yJarUl/RMwXN0r61xzzWNVJ8STYLn6vavW+84znBx26D79Mx52H/wMJw+fUYMI3VfGjyr1UY9p6+USV2D95Wylk/3XLP8lEaxeiLc0+qkHNdQtzS6L+kjIfWmmtanROeaVmtx48aNJFKN4zi9ZeTi1X8B/evLv/79Uzj5/l+SL4LocaScREmt5SNaBuu5j3vJy/U5ViblcZ9i+RHqYx41bY17XFMwR0nlcM11CnoS3Me9Vos6RfI0jXqlSMONItU4jtNbRi5d+zfQ3+rOnL8cBt2HsHP3r2DFyu+IRf1IycvLytZ5EfaKKmdu8j7r9hqU71wabhSpxnGc3nL7oAu/1cV/8/LU55fgw48/gbmFE7B+w0b47v33w7fuvVds0C/kvihjDqni9ysl5236/rBfnZ5NnmcpkYYbRapxHKe3dAfdN399eesfd46/1cVh98k/z8L7H34MJ09+AAvHfwczJ47CzPEFmFlYgPn54zAxdxSemTkEW9uHoBP2c/PHoHP0OMx2job1cVhYCOv5ha7enu3AwrFjMNM5Brv2H4TRyddh1eQbsOrQm7DqcPiM+1ZYx/3kW/DAob0w+vwOmJhsQXv+aCD0CMwtHIXDoceqw68FYu2tPpP7YPTwvrDfe7Nf9CZehSe37YC52aMwPTcfzh37BMK61ZmDuXDOLa2JW/kUr8PoC9vh8Q0/g3a496nZ+W5tt2f47ITvoR04MtcJ/jxMzSzAQ4fCPRwItW/vC59vwuj+A/DAwTe761Vv7YXVT66HJx77KUx3OjAzG77TFJ1wnfA52wnXnluADQcmYXTvAVj12/2wau/Bm5+vhv1rB2Fs87Ow+/kXYDqccTqcZzrkZ9sL0A7XiZ/T8/NwaH4aNm55Bh4cXwdjY2th0+YtsPM3B+CR7S/D6md2hx5b4cmnn4XHXwzf6UsTMLrrdVjz6GZYt3o1jI+PwVioW//UJtg3MQGtcI2Z6VlotWfDOTvQmp2B6fYUTLXDtcPPfO3OIzC2qwUPPj8Da3e0YM3uGRjb3YLxXdPBmwq8HfQpGNsZtO2TML5jFsafa8O67TE/C2uea8G6HZPw0I5pODLVgSMzszDVmQ2f7fB9z0F7pgMvv/wK/OjBn8Do2MOwcfOmcKYpePipF2B8a6jd2oY1T++D9Zu2wGsHQ+9t07BuWxvGfz4Ja3/8BLx6YAZ+8etwveemYM0vZ+Chp9+AJx7fGH6Gc9CanoOpeG9xPURMTU0nmQvfa4p2u12LVqtVm4nwZ2///v2wZ88eWLlyZeN875Ft8NL2x0RvGIn3++L2R0Vv8FkJ/wMyRUtgPxhAmAAAAABJRU5ErkJggg==" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="修改mysql密码" tabindex="-1"><a class="header-anchor" href="#修改mysql密码"><span>修改mysql密码</span></a></h2><p>1 在本机启动mysql服务：</p><p>点击桌面我的电脑，右键选择管理进去：</p><figure><a href="./all_images/1711350803255.jpg"><img src="/assets/1711350803255-BlNTCM2t.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>点击后选择服务</p><figure><a href="./all_images/1711350871137.jpg"><img src="/assets/1711350871137-CWea-lAN.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>点击服务后可查看当前计算机启动的所有服务，找到mysql，然后右键点击设为启动，同时也可设置其为自动启动和手动启动</p><figure><a href="./all_images/1711350989964.jpg"><img src="/assets/1711350989964-CTU9NGmO.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>继续在cmd上执行以下命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>mysql -uroot -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>回车后输入上面安装时保存的初始密码，进入mysql里面：</p><figure><a href="./all_images/b33134d93210412a6d301c9eedfa8a5.png"><img src="/assets/b33134d93210412a6d301c9eedfa8a5-1C9RkdAH.png" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在mysql里面继续执行以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//修改密码为123mysql</span></span>
<span class="line"><span>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;123456&#39;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>回车按照指引执行完后，代表密码修改成功，再输入exit;退出即可</p><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h2><p>为了方便使用mysql命令，可以将mysql目录配置在环境变量里</p><p>新建系统变量：</p><p>变量名：MYSQL_HOME</p><p>变量值：msql目录</p><figure><a href="./all_images/1711352568377.jpg"><img src="/assets/1711352568377-Dac9XHvy.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>修改系统的path变量</p><p>编辑path，进去后添加 %MYSQL_HOME%\\bin</p><figure><a href="./all_images/1711352718673.jpg"><img src="/assets/1711352718673-BtyKyYja.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接"><span>测试连接</span></a></h2><p>为了方便测试，大家可以使用navicat等桌面工具测试连接。以后增删改查也方便。</p><p>可以去官网下载</p><p><a href="https://www.navicat.com.cn/" target="_blank" rel="noopener noreferrer">https://www.navicat.com.cn/</a></p><p>效果如下：</p><figure><a href="./all_images/1711531330919.jpg"><img src="/assets/1711531330919-CmjNf-62.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="docker环境配置mysql" tabindex="-1"><a class="header-anchor" href="#docker环境配置mysql"><span>Docker环境配置mysql</span></a></h2><p>拉取mysql镜像</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker pull mysql:8.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>先启动一个测试版本，然后把他的配置文件拷贝出来</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker run --name mysqltest \\</span></span>
<span class="line"><span>-p 3307:3306 -e MYSQL_ROOT_PASSWORD=root \\</span></span>
<span class="line"><span>-d mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建三个目录，我得目录是</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>mkdir -p /home/zack/llfc/mysql/config</span></span>
<span class="line"><span>mkdir -p /home/zack/llfc/mysql/data</span></span>
<span class="line"><span>mkdir -p /home/zack/llfc/mysql/logs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入docker中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker exec -it mysqltest bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后可以通过搜寻找到配置在<code>/etc/mysql/my.cnf</code></p><p>所以接下来退出容器，执行拷贝命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker cp mysqltest:/etc/mysql/my.cnf  /home/zack/llfc/mysql/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后删除测试用的mysql docker</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker rm -f mysqltest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后启动的容器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker run --restart=on-failure:3 -d   \\</span></span>
<span class="line"><span>-v /home/zack/llfc/mysql/config/my.cnf:/etc/mysql/my.cnf \\</span></span>
<span class="line"><span>-v /home/zack/llfc/mysql/data/:/var/lib/mysql \\</span></span>
<span class="line"><span>-v /home/zack/llfc/mysql/logs:/logs -p 3308:3306  \\</span></span>
<span class="line"><span>--name llfcmysql -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置远程访问" tabindex="-1"><a class="header-anchor" href="#设置远程访问"><span>设置远程访问</span></a></h2><p>进入docker</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>docker exec -it llfcmysql bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>登录mysql</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>mysql -u root -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>设置允许远程访问，我不设置也能访问的，这里介绍一下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>use mysql</span></span>
<span class="line"><span>ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;</span></span>
<span class="line"><span>flush privileges;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次用navicat连接，是可以连接上了。</p><h2 id="完善gateserver配置" tabindex="-1"><a class="header-anchor" href="#完善gateserver配置"><span>完善GateServer配置</span></a></h2><p>添加Redis和Mysql配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[Mysql]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 3308</span></span>
<span class="line"><span>Passwd = 123456</span></span>
<span class="line"><span>[Redis]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 6380</span></span>
<span class="line"><span>Passwd = 123456</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-connector-c" tabindex="-1"><a class="header-anchor" href="#mysql-connector-c"><span>Mysql Connector C++</span></a></h2><p>尽管Mysql提供了访问数据库的接口，但是都是基于C风格的，为了便于面向对象设计，使用Mysql Connector C++ 这个库来访问mysql。</p><p>先安装这个库，因为windows环境代码是debug版本，所以下载connector的debug版本，如果你的开发编译用的release版本，那么就要下载releas版本，否则会报错<br><code>terminate called after throwing an instance of &#39;std::bad_alloc&#39;</code>.</p><p>因为我在windows只做debug调试后期会将项目移植到Linux端，所以这里只下载debug版</p><p>下载地址</p><p><a href="https://dev.mysql.com/downloads/connector/cpp/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/connector/cpp/</a></p><figure><a href="./all_images/1711692126532.jpg"><img src="/assets/1711692126532-BypO8kH-.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>下载后将文件夹解压放在一个自己常用的目录，我放在<code>D:\\cppsoft\\mysql_connector</code></p><figure><a href="./all_images/1711692478215.jpg"><img src="/assets/1711692478215-RS2Gazlw.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>接下来去visual studio中配置项目</p><p>VC++ 包含目录添加<code>D:\\cppsoft\\mysql_connector\\include</code></p><figure><a href="./all_images/1711692778937.jpg"><img src="/assets/1711692778937-C4EVGM5X.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>库目录包含<code>D:\\cppsoft\\mysql_connector\\lib64\\vs14</code></p><figure><a href="./all_images/1711693069494.jpg"><img src="/assets/1711693069494-C8PPkIt5.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>然后将<code>D:\\cppsoft\\mysql_connector\\lib64\\debug</code>下的mysqlcppconn8-2-vs14.dll和mysqlcppconn9-vs14.dll分别拷贝到项目中</p><p>为了让项目自动将dll拷贝到运行目录，可以在生成事件-&gt;生成后事件中添加xcopy命令</p><figure><a href="./all_images/1711693404656.jpg"><img src="/assets/1711693404656-CjWjl3Os.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>xcopy $(ProjectDir)config.ini  $(SolutionDir)$(Platform)\\$(Configuration)\\   /y</span></span>
<span class="line"><span>xcopy $(ProjectDir)*.dll   $(SolutionDir)$(Platform)\\$(Configuration)\\   /y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装mysql连接池" tabindex="-1"><a class="header-anchor" href="#封装mysql连接池"><span>封装mysql连接池</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class MySqlPool {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    MySqlPool(const std::string&amp; url, const std::string&amp; user, const std::string&amp; pass, const std::string&amp; schema, int poolSize)</span></span>
<span class="line"><span>        : url_(url), user_(user), pass_(pass), schema_(schema), poolSize_(poolSize), b_stop_(false){</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            for (int i = 0; i &lt; poolSize_; ++i) {</span></span>
<span class="line"><span>                sql::mysql::MySQL_Driver* driver = sql::mysql::get_mysql_driver_instance();</span></span>
<span class="line"><span>                std::unique_ptr&lt;sql::Connection&gt; con(driver-&gt;connect(url_, user_, pass_));</span></span>
<span class="line"><span>                con-&gt;setSchema(schema_);</span></span>
<span class="line"><span>                pool_.push(std::move(con));</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (sql::SQLException&amp; e) {</span></span>
<span class="line"><span>            // 处理异常</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;mysql pool init failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::unique_ptr&lt;sql::Connection&gt; getConnection() {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        cond_.wait(lock, [this] { </span></span>
<span class="line"><span>            if (b_stop_) {</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }        </span></span>
<span class="line"><span>            return !pool_.empty(); });</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return nullptr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::Connection&gt; con(std::move(pool_.front()));</span></span>
<span class="line"><span>        pool_.pop();</span></span>
<span class="line"><span>        return con;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void returnConnection(std::unique_ptr&lt;sql::Connection&gt; con) {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        pool_.push(std::move(con));</span></span>
<span class="line"><span>        cond_.notify_one();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void Close() {</span></span>
<span class="line"><span>        b_stop_ = true;</span></span>
<span class="line"><span>        cond_.notify_all();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~MySqlPool() {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        while (!pool_.empty()) {</span></span>
<span class="line"><span>            pool_.pop();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    std::string url_;</span></span>
<span class="line"><span>    std::string user_;</span></span>
<span class="line"><span>    std::string pass_;</span></span>
<span class="line"><span>    std::string schema_;</span></span>
<span class="line"><span>    int poolSize_;</span></span>
<span class="line"><span>    std::queue&lt;std::unique_ptr&lt;sql::Connection&gt;&gt; pool_;</span></span>
<span class="line"><span>    std::mutex mutex_;</span></span>
<span class="line"><span>    std::condition_variable cond_;</span></span>
<span class="line"><span>    std::atomic&lt;bool&gt; b_stop_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装dao操作层" tabindex="-1"><a class="header-anchor" href="#封装dao操作层"><span>封装DAO操作层</span></a></h2><p>类的声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class MysqlDao</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    MysqlDao();</span></span>
<span class="line"><span>    ~MysqlDao();</span></span>
<span class="line"><span>    int RegUser(const std::string&amp; name, const std::string&amp; email, const std::string&amp; pwd);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    std::unique_ptr&lt;MySqlPool&gt; pool_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>MysqlDao::MysqlDao()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto &amp; cfg = ConfigMgr::Inst();</span></span>
<span class="line"><span>    const auto&amp; host = cfg[&quot;Mysql&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    const auto&amp; port = cfg[&quot;Mysql&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    const auto&amp; pwd = cfg[&quot;Mysql&quot;][&quot;Passwd&quot;];</span></span>
<span class="line"><span>    const auto&amp; schema = cfg[&quot;Mysql&quot;][&quot;Schema&quot;];</span></span>
<span class="line"><span>    const auto&amp; user = cfg[&quot;Mysql&quot;][&quot;User&quot;];</span></span>
<span class="line"><span>    pool_.reset(new MySqlPool(host+&quot;:&quot;+port, user, pwd,schema, 5));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MysqlDao::~MysqlDao(){</span></span>
<span class="line"><span>    pool_-&gt;Close();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int MysqlDao::RegUser(const std::string&amp; name, const std::string&amp; email, const std::string&amp; pwd)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto con = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        if (con == nullptr) {</span></span>
<span class="line"><span>            pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 准备调用存储过程</span></span>
<span class="line"><span>        unique_ptr &lt; sql::PreparedStatement &gt; stmt(con-&gt;prepareStatement(&quot;CALL reg_user(?,?,?,@result)&quot;));</span></span>
<span class="line"><span>        // 设置输入参数</span></span>
<span class="line"><span>        stmt-&gt;setString(1, name);</span></span>
<span class="line"><span>        stmt-&gt;setString(2, email);</span></span>
<span class="line"><span>        stmt-&gt;setString(3, pwd);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 由于PreparedStatement不直接支持注册输出参数，需要使用会话变量或其他方法来获取输出参数的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // 执行存储过程</span></span>
<span class="line"><span>        stmt-&gt;execute();</span></span>
<span class="line"><span>        // 如果存储过程设置了会话变量或有其他方式获取输出参数的值，你可以在这里执行SELECT查询来获取它们</span></span>
<span class="line"><span>       // 例如，如果存储过程设置了一个会话变量@result来存储输出结果，可以这样获取：</span></span>
<span class="line"><span>       unique_ptr&lt;sql::Statement&gt; stmtResult(con-&gt;createStatement());</span></span>
<span class="line"><span>      unique_ptr&lt;sql::ResultSet&gt; res(stmtResult-&gt;executeQuery(&quot;SELECT @result AS result&quot;));</span></span>
<span class="line"><span>      if (res-&gt;next()) {</span></span>
<span class="line"><span>           int result = res-&gt;getInt(&quot;result&quot;);</span></span>
<span class="line"><span>          cout &lt;&lt; &quot;Result: &quot; &lt;&lt; result &lt;&lt; endl;</span></span>
<span class="line"><span>          pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>          return result;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (sql::SQLException&amp; e) {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;SQLException: &quot; &lt;&lt; e.what();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot; (MySQL error code: &quot; &lt;&lt; e.getErrorCode();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;, SQLState: &quot; &lt;&lt; e.getSQLState() &lt;&lt; &quot; )&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建数据库llfc， llfc数据库添加user表和user_id表</p><figure><a href="./all_images/1712109915609.jpg"><img src="/assets/1712109915609-CA385-4o.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>user表<br><a href="./all_images/1712109796859.jpg"><img src="/assets/1712109796859-D7encNqb.jpg" alt="配图" loading="lazy"></a></p><p>user_id就一行数据，用来记录用户id</p><figure><a href="./all_images/1712110047125.jpg"><img src="/assets/1712110047125-CmAiHgu8.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>这里id用简单计数表示，不考虑以后合服务器和分表分库，如果考虑大家可以采取不同的策略，雪花算法等。</p><p>新建存储过程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>CREATE DEFINER=\`root\`@\`%\` PROCEDURE \`reg_user\`(</span></span>
<span class="line"><span>    IN \`new_name\` VARCHAR(255), </span></span>
<span class="line"><span>    IN \`new_email\` VARCHAR(255), </span></span>
<span class="line"><span>    IN \`new_pwd\` VARCHAR(255), </span></span>
<span class="line"><span>    OUT \`result\` INT)</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    -- 如果在执行过程中遇到任何错误，则回滚事务</span></span>
<span class="line"><span>    DECLARE EXIT HANDLER FOR SQLEXCEPTION</span></span>
<span class="line"><span>    BEGIN</span></span>
<span class="line"><span>        -- 回滚事务</span></span>
<span class="line"><span>        ROLLBACK;</span></span>
<span class="line"><span>        -- 设置返回值为-1，表示错误</span></span>
<span class="line"><span>        SET result = -1;</span></span>
<span class="line"><span>    END;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -- 开始事务</span></span>
<span class="line"><span>    START TRANSACTION;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -- 检查用户名是否已存在</span></span>
<span class="line"><span>    IF EXISTS (SELECT 1 FROM \`user\` WHERE \`name\` = new_name) THEN</span></span>
<span class="line"><span>        SET result = 0; -- 用户名已存在</span></span>
<span class="line"><span>        COMMIT;</span></span>
<span class="line"><span>    ELSE</span></span>
<span class="line"><span>        -- 用户名不存在，检查email是否已存在</span></span>
<span class="line"><span>        IF EXISTS (SELECT 1 FROM \`user\` WHERE \`email\` = new_email) THEN</span></span>
<span class="line"><span>            SET result = 0; -- email已存在</span></span>
<span class="line"><span>            COMMIT;</span></span>
<span class="line"><span>        ELSE</span></span>
<span class="line"><span>            -- email也不存在，更新user_id表</span></span>
<span class="line"><span>            UPDATE \`user_id\` SET \`id\` = \`id\` + 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            -- 获取更新后的id</span></span>
<span class="line"><span>            SELECT \`id\` INTO @new_id FROM \`user_id\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            -- 在user表中插入新记录</span></span>
<span class="line"><span>            INSERT INTO \`user\` (\`uid\`, \`name\`, \`email\`, \`pwd\`) VALUES (@new_id, new_name, new_email, new_pwd);</span></span>
<span class="line"><span>            -- 设置result为新插入的uid</span></span>
<span class="line"><span>            SET result = @new_id; -- 插入成功，返回新的uid</span></span>
<span class="line"><span>            COMMIT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        END IF;</span></span>
<span class="line"><span>    END IF;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>END</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库管理者" tabindex="-1"><a class="header-anchor" href="#数据库管理者"><span>数据库管理者</span></a></h2><p>需要建立一个数据库管理者用来实现服务层，对接逻辑层的调用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span>#include &quot;MysqlDao.h&quot;</span></span>
<span class="line"><span>class MysqlMgr: public Singleton&lt;MysqlMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class Singleton&lt;MysqlMgr&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~MysqlMgr();</span></span>
<span class="line"><span>    int RegUser(const std::string&amp; name, const std::string&amp; email,  const std::string&amp; pwd);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    MysqlMgr();</span></span>
<span class="line"><span>    MysqlDao  _dao;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;MysqlMgr.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MysqlMgr::~MysqlMgr() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int MysqlMgr::RegUser(const std::string&amp; name, const std::string&amp; email, const std::string&amp; pwd)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return _dao.RegUser(name, email, pwd);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MysqlMgr::MysqlMgr() {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑层调用" tabindex="-1"><a class="header-anchor" href="#逻辑层调用"><span>逻辑层调用</span></a></h2><p>在逻辑层注册消息处理。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>RegPost(&quot;/user_register&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto email = src_root[&quot;email&quot;].asString();</span></span>
<span class="line"><span>    auto name = src_root[&quot;user&quot;].asString();</span></span>
<span class="line"><span>    auto pwd = src_root[&quot;passwd&quot;].asString();</span></span>
<span class="line"><span>    auto confirm = src_root[&quot;confirm&quot;].asString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (pwd != confirm) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;password err &quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::PasswdErr;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //先查找redis中email对应的验证码是否合理</span></span>
<span class="line"><span>    std::string  varify_code;</span></span>
<span class="line"><span>    bool b_get_varify = RedisMgr::GetInstance()-&gt;Get(CODEPREFIX+src_root[&quot;email&quot;].asString(), varify_code);</span></span>
<span class="line"><span>    if (!b_get_varify) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; get varify code expired&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyExpired;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (varify_code != src_root[&quot;varifycode&quot;].asString()) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; varify code error&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyCodeErr;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //查找数据库判断用户是否存在</span></span>
<span class="line"><span>    int uid = MysqlMgr::GetInstance()-&gt;RegUser(name, email, pwd);</span></span>
<span class="line"><span>    if (uid == 0 || uid == -1) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; user or email exist&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::UserExist;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    root[&quot;error&quot;] = 0;</span></span>
<span class="line"><span>    root[&quot;uid&quot;] = uid;</span></span>
<span class="line"><span>    root[&quot;email&quot;] = email;</span></span>
<span class="line"><span>    root [&quot;user&quot;]= name;</span></span>
<span class="line"><span>    root[&quot;passwd&quot;] = pwd;</span></span>
<span class="line"><span>    root[&quot;confirm&quot;] = confirm;</span></span>
<span class="line"><span>    root[&quot;varifycode&quot;] = src_root[&quot;varifycode&quot;].asString();</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>    });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次启动客户端测试，可以注册成功</p><hr><h1 id="day-12-增加定时按钮" tabindex="-1"><a class="header-anchor" href="#day-12-增加定时按钮"><span>Day 12：增加定时按钮</span></a></h1><h2 id="增加定时按钮" tabindex="-1"><a class="header-anchor" href="#增加定时按钮"><span>增加定时按钮</span></a></h2><p>点击获取验证码后需要让按钮显示倒计时，然后倒计时结束后再次可点击。<br> 添加TimberBtn类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef TIMERBTN_H</span></span>
<span class="line"><span>#define TIMERBTN_H</span></span>
<span class="line"><span>#include &lt;QPushButton&gt;</span></span>
<span class="line"><span>#include &lt;QTimer&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TimerBtn : public QPushButton</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    TimerBtn(QWidget *parent = nullptr);</span></span>
<span class="line"><span>    ~ TimerBtn();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 重写mouseReleaseEvent</span></span>
<span class="line"><span>    virtual void mouseReleaseEvent(QMouseEvent *e) override;</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    QTimer  *_timer;</span></span>
<span class="line"><span>    int _counter;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // TIMERBTN_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;timerbtn.h&quot;</span></span>
<span class="line"><span>#include &lt;QMouseEvent&gt;</span></span>
<span class="line"><span>#include &lt;QDebug&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TimerBtn::TimerBtn(QWidget *parent):QPushButton(parent),_counter(10)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _timer = new QTimer(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    connect(_timer, &amp;QTimer::timeout, [this](){</span></span>
<span class="line"><span>        _counter--;</span></span>
<span class="line"><span>        if(_counter &lt;= 0){</span></span>
<span class="line"><span>            _timer-&gt;stop();</span></span>
<span class="line"><span>            _counter = 10;</span></span>
<span class="line"><span>            this-&gt;setText(&quot;获取&quot;);</span></span>
<span class="line"><span>            this-&gt;setEnabled(true);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        this-&gt;setText(QString::number(_counter));</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TimerBtn::~TimerBtn()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _timer-&gt;stop();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void TimerBtn::mouseReleaseEvent(QMouseEvent *e)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (e-&gt;button() == Qt::LeftButton) {</span></span>
<span class="line"><span>        // 在这里处理鼠标左键释放事件</span></span>
<span class="line"><span>        qDebug() &lt;&lt; &quot;MyButton was released!&quot;;</span></span>
<span class="line"><span>        this-&gt;setEnabled(false);</span></span>
<span class="line"><span>         this-&gt;setText(QString::number(_counter));</span></span>
<span class="line"><span>        _timer-&gt;start(1000);</span></span>
<span class="line"><span>        emit clicked();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 调用基类的mouseReleaseEvent以确保正常的事件处理（如点击效果）</span></span>
<span class="line"><span>    QPushButton::mouseReleaseEvent(e);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将注册界面获取按钮升级为TimerBtn</p><h2 id="调整输入框错误提示" tabindex="-1"><a class="header-anchor" href="#调整输入框错误提示"><span>调整输入框错误提示</span></a></h2><p>在RegisterDialog构造函数中删除原来的输入框editing信号和逻辑，添加editingFinished信号和处理逻辑。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//day11 设定输入框输入后清空字符串</span></span>
<span class="line"><span>ui-&gt;err_tip-&gt;clear();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;user_edit,&amp;QLineEdit::editingFinished,this,[this](){</span></span>
<span class="line"><span>    checkUserValid();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;email_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>    checkEmailValid();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;pass_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>    checkPassValid();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;confirm_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>    checkConfirmValid();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;varify_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>        checkVarifyValid();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>global.h中添加TipErr定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>enum TipErr{</span></span>
<span class="line"><span>    TIP_SUCCESS = 0,</span></span>
<span class="line"><span>    TIP_EMAIL_ERR = 1,</span></span>
<span class="line"><span>    TIP_PWD_ERR = 2,</span></span>
<span class="line"><span>    TIP_CONFIRM_ERR = 3,</span></span>
<span class="line"><span>    TIP_PWD_CONFIRM = 4,</span></span>
<span class="line"><span>    TIP_VARIFY_ERR = 5,</span></span>
<span class="line"><span>    TIP_USER_ERR = 6</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RegisterDialog声明中添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>QMap&lt;TipErr, QString&gt; _tip_errs;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>_tip_errs用来缓存各个输入框输入完成后提示的错误，如果该输入框错误清除后就显示剩余的错误，每次只显示一条</p><p>实现添加错误和删除错误</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::AddTipErr(TipErr te, QString tips)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _tip_errs[te] = tips;</span></span>
<span class="line"><span>    showTip(tips, false);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ResetDialog::DelTipErr(TipErr te)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _tip_errs.remove(te);</span></span>
<span class="line"><span>    if(_tip_errs.empty()){</span></span>
<span class="line"><span>      ui-&gt;err_tip-&gt;clear();</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    showTip(_tip_errs.first(), false);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现错误检测</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool ResetDialog::checkUserValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(ui-&gt;user_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_USER_ERR, tr(&quot;用户名不能为空&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_USER_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkPassValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto pass = ui-&gt;pwd_edit-&gt;text();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(pass.length() &lt; 6 || pass.length()&gt;15){</span></span>
<span class="line"><span>        //提示长度不准确</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_PWD_ERR, tr(&quot;密码长度应为6~15&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建一个正则表达式对象，按照上述密码要求</span></span>
<span class="line"><span>    // 这个正则表达式解释：</span></span>
<span class="line"><span>    // ^[a-zA-Z0-9!@#$%^&amp;*]{6,15}$ 密码长度至少6，可以是字母、数字和特定的特殊字符</span></span>
<span class="line"><span>    QRegularExpression regExp(&quot;^[a-zA-Z0-9!@#$%^&amp;*]{6,15}$&quot;);</span></span>
<span class="line"><span>    bool match = regExp.match(pass).hasMatch();</span></span>
<span class="line"><span>    if(!match){</span></span>
<span class="line"><span>        //提示字符非法</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_PWD_ERR, tr(&quot;不能包含非法字符&quot;));</span></span>
<span class="line"><span>        return false;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_PWD_ERR);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkEmailValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //验证邮箱的地址正则表达式</span></span>
<span class="line"><span>    auto email = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    // 邮箱地址的正则表达式</span></span>
<span class="line"><span>    QRegularExpression regex(R&quot;((\\w+)(\\.|_)?(\\w*)@(\\w+)(\\.(\\w+))+)&quot;);</span></span>
<span class="line"><span>    bool match = regex.match(email).hasMatch(); // 执行正则表达式匹配</span></span>
<span class="line"><span>    if(!match){</span></span>
<span class="line"><span>        //提示邮箱不正确</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_EMAIL_ERR, tr(&quot;邮箱地址不正确&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_EMAIL_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkVarifyValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto pass = ui-&gt;varify_edit-&gt;text();</span></span>
<span class="line"><span>    if(pass.isEmpty()){</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_VARIFY_ERR, tr(&quot;验证码不能为空&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_VARIFY_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外修改之前点击确认按钮的逻辑，改为检测所有条件成立后再发送请求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::on_sure_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    bool valid = checkUserValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkEmailValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkPassValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkVarifyValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //发送http重置用户请求</span></span>
<span class="line"><span>    QJsonObject json_obj;</span></span>
<span class="line"><span>    json_obj[&quot;user&quot;] = ui-&gt;user_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;email&quot;] = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;passwd&quot;] = xorString(ui-&gt;pwd_edit-&gt;text());</span></span>
<span class="line"><span>    json_obj[&quot;varifycode&quot;] = ui-&gt;varify_edit-&gt;text();</span></span>
<span class="line"><span>    HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/reset_pwd&quot;),</span></span>
<span class="line"><span>                 json_obj, ReqId::ID_RESET_PWD,Modules::RESETMOD);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="隐藏和显示密码" tabindex="-1"><a class="header-anchor" href="#隐藏和显示密码"><span>隐藏和显示密码</span></a></h2><p>在输入密码时希望能通过点击可见还是不可见，显示密码和隐藏密码，这里先添加图片放入资源中，然后在Register.ui中添加两个label，分别命名为pass_visible和confirm_visible, 用来占据位置。</p><p>因为要做的点击后图片要有状态切换，以及浮动显示不一样的效果等，所以重写ClickedLabel,继承自QLabel.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef CLICKEDLABEL_H</span></span>
<span class="line"><span>#define CLICKEDLABEL_H</span></span>
<span class="line"><span>#include &lt;QLabel&gt;</span></span>
<span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ClickedLabel:public QLabel</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ClickedLabel(QWidget* parent);</span></span>
<span class="line"><span>    virtual void mousePressEvent(QMouseEvent *ev) override;</span></span>
<span class="line"><span>    virtual void enterEvent(QEvent* event) override;</span></span>
<span class="line"><span>    virtual void leaveEvent(QEvent* event) override;</span></span>
<span class="line"><span>    void SetState(QString normal=&quot;&quot;, QString hover=&quot;&quot;, QString press=&quot;&quot;,</span></span>
<span class="line"><span>                  QString select=&quot;&quot;, QString select_hover=&quot;&quot;, QString select_press=&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ClickLbState GetCurState();</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    QString _normal;</span></span>
<span class="line"><span>    QString _normal_hover;</span></span>
<span class="line"><span>    QString _normal_press;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QString _selected;</span></span>
<span class="line"><span>    QString _selected_hover;</span></span>
<span class="line"><span>    QString _selected_press;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ClickLbState _curstate;</span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void clicked(void);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // CLICKEDLABEL_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个Label有六种状态，普通状态，普通的悬浮状态，普通的点击状态，选中状态，选中的悬浮状态，选中的点击状态。</p><p>当Label处于普通状态，被点击后，切换为选中状态，再次点击又切换为普通状态。</p><p>ClickLbState定义在global.h中，包含两种状态一个是普通状态，一个是选中状态。而Label中的六种状态就是基于这两种状态嵌套实现的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>enum ClickLbState{</span></span>
<span class="line"><span>    Normal = 0,</span></span>
<span class="line"><span>    Selected = 1</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>六种状态用qss写好，这样只需要根据鼠标事件切换不同的qss就可以实现样式变换。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#pass_visible[state=&#39;unvisible&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/unvisible.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pass_visible[state=&#39;unvisible_hover&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/unvisible_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pass_visible[state=&#39;visible&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/visible.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pass_visible[state=&#39;visible_hover&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/visible_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#confirm_visible[state=&#39;unvisible&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/unvisible.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#confirm_visible[state=&#39;unvisible_hover&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/unvisible_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#confirm_visible[state=&#39;visible&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/visible.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#confirm_visible[state=&#39;visible_hover&#39;]{</span></span>
<span class="line"><span>   border-image: url(:/res/visible_hover.png);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现ClickedLabel功能</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;clickedlabel.h&quot;</span></span>
<span class="line"><span>#include &lt;QMouseEvent&gt;</span></span>
<span class="line"><span>ClickedLabel::ClickedLabel(QWidget* parent):QLabel (parent),_curstate(ClickLbState::Normal)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理鼠标点击事件</span></span>
<span class="line"><span>void ClickedLabel::mousePressEvent(QMouseEvent* event)  {</span></span>
<span class="line"><span>    if (event-&gt;button() == Qt::LeftButton) {</span></span>
<span class="line"><span>        if(_curstate == ClickLbState::Normal){</span></span>
<span class="line"><span>              qDebug()&lt;&lt;&quot;clicked , change to selected hover: &quot;&lt;&lt; _selected_hover;</span></span>
<span class="line"><span>            _curstate = ClickLbState::Selected;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_selected_hover);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>               qDebug()&lt;&lt;&quot;clicked , change to normal hover: &quot;&lt;&lt; _normal_hover;</span></span>
<span class="line"><span>            _curstate = ClickLbState::Normal;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_normal_hover);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        emit clicked();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 调用基类的mousePressEvent以保证正常的事件处理</span></span>
<span class="line"><span>    QLabel::mousePressEvent(event);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理鼠标悬停进入事件</span></span>
<span class="line"><span>void ClickedLabel::enterEvent(QEvent* event) {</span></span>
<span class="line"><span>    // 在这里处理鼠标悬停进入的逻辑</span></span>
<span class="line"><span>    if(_curstate == ClickLbState::Normal){</span></span>
<span class="line"><span>         qDebug()&lt;&lt;&quot;enter , change to normal hover: &quot;&lt;&lt; _normal_hover;</span></span>
<span class="line"><span>        setProperty(&quot;state&quot;,_normal_hover);</span></span>
<span class="line"><span>        repolish(this);</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>         qDebug()&lt;&lt;&quot;enter , change to selected hover: &quot;&lt;&lt; _selected_hover;</span></span>
<span class="line"><span>        setProperty(&quot;state&quot;,_selected_hover);</span></span>
<span class="line"><span>        repolish(this);</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QLabel::enterEvent(event);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理鼠标悬停离开事件</span></span>
<span class="line"><span>void ClickedLabel::leaveEvent(QEvent* event){</span></span>
<span class="line"><span>    // 在这里处理鼠标悬停离开的逻辑</span></span>
<span class="line"><span>    if(_curstate == ClickLbState::Normal){</span></span>
<span class="line"><span>         qDebug()&lt;&lt;&quot;leave , change to normal : &quot;&lt;&lt; _normal;</span></span>
<span class="line"><span>        setProperty(&quot;state&quot;,_normal);</span></span>
<span class="line"><span>        repolish(this);</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>         qDebug()&lt;&lt;&quot;leave , change to normal hover: &quot;&lt;&lt; _selected;</span></span>
<span class="line"><span>        setProperty(&quot;state&quot;,_selected);</span></span>
<span class="line"><span>        repolish(this);</span></span>
<span class="line"><span>        update();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    QLabel::leaveEvent(event);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ClickedLabel::SetState(QString normal, QString hover, QString press,</span></span>
<span class="line"><span>                            QString select, QString select_hover, QString select_press)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _normal = normal;</span></span>
<span class="line"><span>    _normal_hover = hover;</span></span>
<span class="line"><span>    _normal_press = press;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _selected = select;</span></span>
<span class="line"><span>    _selected_hover = select_hover;</span></span>
<span class="line"><span>    _selected_press = select_press;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    setProperty(&quot;state&quot;,normal);</span></span>
<span class="line"><span>    repolish(this);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ClickLbState ClickedLabel::GetCurState(){</span></span>
<span class="line"><span>    return _curstate;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将label升级为ClickedLabel，然后在RegisterDialog的构造函数中添加label点击的响应函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//设置浮动显示手形状</span></span>
<span class="line"><span>ui-&gt;pass_visible-&gt;setCursor(Qt::PointingHandCursor);</span></span>
<span class="line"><span>ui-&gt;confirm_visible-&gt;setCursor(Qt::PointingHandCursor);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ui-&gt;pass_visible-&gt;SetState(&quot;unvisible&quot;,&quot;unvisible_hover&quot;,&quot;&quot;,&quot;visible&quot;,</span></span>
<span class="line"><span>                            &quot;visible_hover&quot;,&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ui-&gt;confirm_visible-&gt;SetState(&quot;unvisible&quot;,&quot;unvisible_hover&quot;,&quot;&quot;,&quot;visible&quot;,</span></span>
<span class="line"><span>                                &quot;visible_hover&quot;,&quot;&quot;);</span></span>
<span class="line"><span>//连接点击事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;pass_visible, &amp;ClickedLabel::clicked, this, [this]() {</span></span>
<span class="line"><span>    auto state = ui-&gt;pass_visible-&gt;GetCurState();</span></span>
<span class="line"><span>    if(state == ClickLbState::Normal){</span></span>
<span class="line"><span>        ui-&gt;pass_edit-&gt;setEchoMode(QLineEdit::Password);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>            ui-&gt;pass_edit-&gt;setEchoMode(QLineEdit::Normal);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;Label was clicked!&quot;;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>connect(ui-&gt;confirm_visible, &amp;ClickedLabel::clicked, this, [this]() {</span></span>
<span class="line"><span>    auto state = ui-&gt;confirm_visible-&gt;GetCurState();</span></span>
<span class="line"><span>    if(state == ClickLbState::Normal){</span></span>
<span class="line"><span>        ui-&gt;confirm_edit-&gt;setEchoMode(QLineEdit::Password);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>            ui-&gt;confirm_edit-&gt;setEchoMode(QLineEdit::Normal);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;Label was clicked!&quot;;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就实现了通过点击切换密码的显示和隐藏。</p><h2 id="注册成功提示页面" tabindex="-1"><a class="header-anchor" href="#注册成功提示页面"><span>注册成功提示页面</span></a></h2><p>注册成功后要切换到提示页面，所以在initHandlers函数内实现收到服务器注册回复的请求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//注册注册用户回包逻辑</span></span>
<span class="line"><span>_handlers.insert(ReqId::ID_REG_USER, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>    int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>    if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>        showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    auto email = jsonObj[&quot;email&quot;].toString();</span></span>
<span class="line"><span>    showTip(tr(&quot;用户注册成功&quot;), true);</span></span>
<span class="line"><span>    qDebug()&lt;&lt; &quot;email is &quot; &lt;&lt; email ;</span></span>
<span class="line"><span>    qDebug()&lt;&lt; &quot;user uuid is &quot; &lt;&lt;  jsonObj[&quot;uuid&quot;].toString();</span></span>
<span class="line"><span>    ChangeTipPage();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面切换逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::ChangeTipPage()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _countdown_timer-&gt;stop();</span></span>
<span class="line"><span>    ui-&gt;stackedWidget-&gt;setCurrentWidget(ui-&gt;page_2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 启动定时器，设置间隔为1000毫秒（1秒）</span></span>
<span class="line"><span>    _countdown_timer-&gt;start(1000);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在RegisterDialog.ui中stackwidget的page2添加标签和返回按钮</p><figure><a href="./all_images/1712821604946.jpg"><img src="/assets/1712821604946-CuhDgu-B.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>在RegisterDialog构造函数中添加定时器回调</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 创建定时器</span></span>
<span class="line"><span>_countdown_timer = new QTimer(this);</span></span>
<span class="line"><span>// 连接信号和槽</span></span>
<span class="line"><span>connect(_countdown_timer, &amp;QTimer::timeout, [this](){</span></span>
<span class="line"><span>    if(_countdown==0){</span></span>
<span class="line"><span>        _countdown_timer-&gt;stop();</span></span>
<span class="line"><span>        emit sigSwitchLogin();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    _countdown--;</span></span>
<span class="line"><span>    auto str = QString(&quot;注册成功，%1 s后返回登录&quot;).arg(_countdown);</span></span>
<span class="line"><span>    ui-&gt;tip_lb-&gt;setText(str);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外在返回按钮的槽函数中停止定时器并发送切换登录的信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::on_return_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _countdown_timer-&gt;stop();</span></span>
<span class="line"><span>    emit sigSwitchLogin();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取消注册也发送切换登录信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void RegisterDialog::on_cancel_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _countdown_timer-&gt;stop();</span></span>
<span class="line"><span>    emit sigSwitchLogin();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="界面跳转" tabindex="-1"><a class="header-anchor" href="#界面跳转"><span>界面跳转</span></a></h2><p>回到mainwindow，构造函数简化，只做登录界面初始化</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>MainWindow::MainWindow(QWidget *parent) :</span></span>
<span class="line"><span>    QMainWindow(parent),</span></span>
<span class="line"><span>    ui(new Ui::MainWindow)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span>    //创建一个CentralWidget, 并将其设置为MainWindow的中心部件</span></span>
<span class="line"><span>    _login_dlg = new LoginDialog(this);</span></span>
<span class="line"><span>    _login_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span>    setCentralWidget(_login_dlg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //连接登录界面注册信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchRegister, this, &amp;MainWindow::SlotSwitchReg);</span></span>
<span class="line"><span>    //连接登录界面忘记密码信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchReset, this, &amp;MainWindow::SlotSwitchReset);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在点击注册按钮的槽函数中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void MainWindow::SlotSwitchReg()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _reg_dlg = new RegisterDialog(this);</span></span>
<span class="line"><span>    _reg_dlg-&gt;hide();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _reg_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     //连接注册界面返回登录信号</span></span>
<span class="line"><span>    connect(_reg_dlg, &amp;RegisterDialog::sigSwitchLogin, this, &amp;MainWindow::SlotSwitchLogin);</span></span>
<span class="line"><span>    setCentralWidget(_reg_dlg);</span></span>
<span class="line"><span>    _login_dlg-&gt;hide();</span></span>
<span class="line"><span>    _reg_dlg-&gt;show();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换登录界面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//从注册界面返回登录界面</span></span>
<span class="line"><span>void MainWindow::SlotSwitchLogin()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //创建一个CentralWidget, 并将其设置为MainWindow的中心部件</span></span>
<span class="line"><span>    _login_dlg = new LoginDialog(this);</span></span>
<span class="line"><span>    _login_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span>    setCentralWidget(_login_dlg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   _reg_dlg-&gt;hide();</span></span>
<span class="line"><span>    _login_dlg-&gt;show();</span></span>
<span class="line"><span>    //连接登录界面注册信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchRegister, this, &amp;MainWindow::SlotSwitchReg);</span></span>
<span class="line"><span>    //连接登录界面忘记密码信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchReset, this, &amp;MainWindow::SlotSwitchReset);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样登录界面和注册界面的切换逻辑就写完了。</p><hr><h1 id="day-13-重置密码label" tabindex="-1"><a class="header-anchor" href="#day-13-重置密码label"><span>Day 13：重置密码label</span></a></h1><h2 id="重置密码label" tabindex="-1"><a class="header-anchor" href="#重置密码label"><span>重置密码label</span></a></h2><p>当在登录忘记密码的时候可以支持重置密码，重置密码label也要实现浮动和点击效果，以及未点击效果。所以复用之前的ClickedLabel,<br> 在登录界面中升级forget_label为ClickedLabel。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LoginDialog::LoginDialog(QWidget *parent) :</span></span>
<span class="line"><span>    QDialog(parent),</span></span>
<span class="line"><span>    ui(new Ui::LoginDialog)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span>    connect(ui-&gt;reg_btn, &amp;QPushButton::clicked, this, &amp;LoginDialog::switchRegister);</span></span>
<span class="line"><span>    ui-&gt;forget_label-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;&quot;,&quot;selected&quot;,&quot;selected_hover&quot;,&quot;&quot;);</span></span>
<span class="line"><span>    ui-&gt;forget_label-&gt;setCursor(Qt::PointingHandCursor);</span></span>
<span class="line"><span>    connect(ui-&gt;forget_label, &amp;ClickedLabel::clicked, this, &amp;LoginDialog::slot_forget_pwd);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击忘记密码发送对应的信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::slot_forget_pwd()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    qDebug()&lt;&lt;&quot;slot forget pwd&quot;;</span></span>
<span class="line"><span>    emit switchReset();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在mainwindow中连接了重置密码的信号和槽</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//连接登录界面忘记密码信号</span></span>
<span class="line"><span>connect(_login_dlg, &amp;LoginDialog::switchReset, this, &amp;MainWindow::SlotSwitchReset);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>实现SlotSwitchReset</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void MainWindow::SlotSwitchReset()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //创建一个CentralWidget, 并将其设置为MainWindow的中心部件</span></span>
<span class="line"><span>    _reset_dlg = new ResetDialog(this);</span></span>
<span class="line"><span>    _reset_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span>    setCentralWidget(_reset_dlg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   _login_dlg-&gt;hide();</span></span>
<span class="line"><span>    _reset_dlg-&gt;show();</span></span>
<span class="line"><span>    //注册返回登录信号和槽函数</span></span>
<span class="line"><span>    connect(_reset_dlg, &amp;ResetDialog::switchLogin, this, &amp;MainWindow::SlotSwitchLogin2);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ResetDialog是添加的界面类，新建ResetDialog界面类，界面布局如下</p><figure><a href="./all_images/1712826184149.jpg"><img src="/assets/1712826184149-BZBTNEIB.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="重置界面" tabindex="-1"><a class="header-anchor" href="#重置界面"><span>重置界面</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;resetdialog.h&quot;</span></span>
<span class="line"><span>#include &quot;ui_resetdialog.h&quot;</span></span>
<span class="line"><span>#include &lt;QDebug&gt;</span></span>
<span class="line"><span>#include &lt;QRegularExpression&gt;</span></span>
<span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span>#include &quot;httpmgr.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ResetDialog::ResetDialog(QWidget *parent) :</span></span>
<span class="line"><span>    QDialog(parent),</span></span>
<span class="line"><span>    ui(new Ui::ResetDialog)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    connect(ui-&gt;user_edit,&amp;QLineEdit::editingFinished,this,[this](){</span></span>
<span class="line"><span>        checkUserValid();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    connect(ui-&gt;email_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>        checkEmailValid();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    connect(ui-&gt;pwd_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>        checkPassValid();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    connect(ui-&gt;varify_edit, &amp;QLineEdit::editingFinished, this, [this](){</span></span>
<span class="line"><span>         checkVarifyValid();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //连接reset相关信号和注册处理回调</span></span>
<span class="line"><span>    initHandlers();</span></span>
<span class="line"><span>    connect(HttpMgr::GetInstance().get(), &amp;HttpMgr::sig_reset_mod_finish, this,</span></span>
<span class="line"><span>            &amp;ResetDialog::slot_reset_mod_finish);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是检测逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool ResetDialog::checkUserValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(ui-&gt;user_edit-&gt;text() == &quot;&quot;){</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_USER_ERR, tr(&quot;用户名不能为空&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_USER_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkPassValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto pass = ui-&gt;pwd_edit-&gt;text();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(pass.length() &lt; 6 || pass.length()&gt;15){</span></span>
<span class="line"><span>        //提示长度不准确</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_PWD_ERR, tr(&quot;密码长度应为6~15&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建一个正则表达式对象，按照上述密码要求</span></span>
<span class="line"><span>    // 这个正则表达式解释：</span></span>
<span class="line"><span>    // ^[a-zA-Z0-9!@#$%^&amp;*]{6,15}$ 密码长度至少6，可以是字母、数字和特定的特殊字符</span></span>
<span class="line"><span>    QRegularExpression regExp(&quot;^[a-zA-Z0-9!@#$%^&amp;*]{6,15}$&quot;);</span></span>
<span class="line"><span>    bool match = regExp.match(pass).hasMatch();</span></span>
<span class="line"><span>    if(!match){</span></span>
<span class="line"><span>        //提示字符非法</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_PWD_ERR, tr(&quot;不能包含非法字符&quot;));</span></span>
<span class="line"><span>        return false;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_PWD_ERR);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkEmailValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //验证邮箱的地址正则表达式</span></span>
<span class="line"><span>    auto email = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    // 邮箱地址的正则表达式</span></span>
<span class="line"><span>    QRegularExpression regex(R&quot;((\\w+)(\\.|_)?(\\w*)@(\\w+)(\\.(\\w+))+)&quot;);</span></span>
<span class="line"><span>    bool match = regex.match(email).hasMatch(); // 执行正则表达式匹配</span></span>
<span class="line"><span>    if(!match){</span></span>
<span class="line"><span>        //提示邮箱不正确</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_EMAIL_ERR, tr(&quot;邮箱地址不正确&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_EMAIL_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ResetDialog::checkVarifyValid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto pass = ui-&gt;varify_edit-&gt;text();</span></span>
<span class="line"><span>    if(pass.isEmpty()){</span></span>
<span class="line"><span>        AddTipErr(TipErr::TIP_VARIFY_ERR, tr(&quot;验证码不能为空&quot;));</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    DelTipErr(TipErr::TIP_VARIFY_ERR);</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ResetDialog::AddTipErr(TipErr te, QString tips)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _tip_errs[te] = tips;</span></span>
<span class="line"><span>    showTip(tips, false);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ResetDialog::DelTipErr(TipErr te)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _tip_errs.remove(te);</span></span>
<span class="line"><span>    if(_tip_errs.empty()){</span></span>
<span class="line"><span>      ui-&gt;err_tip-&gt;clear();</span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    showTip(_tip_errs.first(), false);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示接口</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::showTip(QString str, bool b_ok)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(b_ok){</span></span>
<span class="line"><span>         ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;normal&quot;);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        ui-&gt;err_tip-&gt;setProperty(&quot;state&quot;,&quot;err&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ui-&gt;err_tip-&gt;setText(str);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    repolish(ui-&gt;err_tip);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取验证码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::on_varify_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    qDebug()&lt;&lt;&quot;receive varify btn clicked &quot;;</span></span>
<span class="line"><span>    auto email = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    auto bcheck = checkEmailValid();</span></span>
<span class="line"><span>    if(!bcheck){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //发送http请求获取验证码</span></span>
<span class="line"><span>    QJsonObject json_obj;</span></span>
<span class="line"><span>    json_obj[&quot;email&quot;] = email;</span></span>
<span class="line"><span>    HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/get_varifycode&quot;),</span></span>
<span class="line"><span>                                        json_obj, ReqId::ID_GET_VARIFY_CODE,Modules::RESETMOD);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化回包处理逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::initHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //注册获取验证码回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_GET_VARIFY_CODE, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto email = jsonObj[&quot;email&quot;].toString();</span></span>
<span class="line"><span>        showTip(tr(&quot;验证码已发送到邮箱，注意查收&quot;), true);</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;email is &quot; &lt;&lt; email ;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //注册注册用户回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_RESET_PWD, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto email = jsonObj[&quot;email&quot;].toString();</span></span>
<span class="line"><span>        showTip(tr(&quot;重置成功,点击返回登录&quot;), true);</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;email is &quot; &lt;&lt; email ;</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;user uuid is &quot; &lt;&lt;  jsonObj[&quot;uuid&quot;].toString();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据返回的id调用不同的回报处理逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::slot_reset_mod_finish(ReqId id, QString res, ErrorCodes err)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(err != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>        showTip(tr(&quot;网络请求错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析 JSON 字符串,res需转化为QByteArray</span></span>
<span class="line"><span>    QJsonDocument jsonDoc = QJsonDocument::fromJson(res.toUtf8());</span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(jsonDoc.isNull()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(!jsonDoc.isObject()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //调用对应的逻辑,根据id回调。</span></span>
<span class="line"><span>    _handlers[id](jsonDoc.object());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里实现发送逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ResetDialog::on_sure_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    bool valid = checkUserValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkEmailValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkPassValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    valid = checkVarifyValid();</span></span>
<span class="line"><span>    if(!valid){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //发送http重置用户请求</span></span>
<span class="line"><span>    QJsonObject json_obj;</span></span>
<span class="line"><span>    json_obj[&quot;user&quot;] = ui-&gt;user_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;email&quot;] = ui-&gt;email_edit-&gt;text();</span></span>
<span class="line"><span>    json_obj[&quot;passwd&quot;] = xorString(ui-&gt;pwd_edit-&gt;text());</span></span>
<span class="line"><span>    json_obj[&quot;varifycode&quot;] = ui-&gt;varify_edit-&gt;text();</span></span>
<span class="line"><span>    HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/reset_pwd&quot;),</span></span>
<span class="line"><span>                 json_obj, ReqId::ID_RESET_PWD,Modules::RESETMOD);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册、重置、登录切换" tabindex="-1"><a class="header-anchor" href="#注册、重置、登录切换"><span>注册、重置、登录切换</span></a></h2><p>要实现注册、重置、登录三个界面的替换，就需要在MainWindow中添加SlotSwitchLogin2的实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//从重置界面返回登录界面</span></span>
<span class="line"><span>void MainWindow::SlotSwitchLogin2()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //创建一个CentralWidget, 并将其设置为MainWindow的中心部件</span></span>
<span class="line"><span>    _login_dlg = new LoginDialog(this);</span></span>
<span class="line"><span>    _login_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span>    setCentralWidget(_login_dlg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   _reset_dlg-&gt;hide();</span></span>
<span class="line"><span>    _login_dlg-&gt;show();</span></span>
<span class="line"><span>    //连接登录界面忘记密码信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchReset, this, &amp;MainWindow::SlotSwitchReset);</span></span>
<span class="line"><span>    //连接登录界面注册信号</span></span>
<span class="line"><span>    connect(_login_dlg, &amp;LoginDialog::switchRegister, this, &amp;MainWindow::SlotSwitchReg);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务端响应重置" tabindex="-1"><a class="header-anchor" href="#服务端响应重置"><span>服务端响应重置</span></a></h2><p>在LogicSystem的构造函数中增加注册逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//重置回调逻辑</span></span>
<span class="line"><span>RegPost(&quot;/reset_pwd&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto email = src_root[&quot;email&quot;].asString();</span></span>
<span class="line"><span>    auto name = src_root[&quot;user&quot;].asString();</span></span>
<span class="line"><span>    auto pwd = src_root[&quot;passwd&quot;].asString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //先查找redis中email对应的验证码是否合理</span></span>
<span class="line"><span>    std::string  varify_code;</span></span>
<span class="line"><span>    bool b_get_varify = RedisMgr::GetInstance()-&gt;Get(CODEPREFIX + src_root[&quot;email&quot;].asString(), varify_code);</span></span>
<span class="line"><span>    if (!b_get_varify) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; get varify code expired&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyExpired;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (varify_code != src_root[&quot;varifycode&quot;].asString()) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; varify code error&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::VarifyCodeErr;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //查询数据库判断用户名和邮箱是否匹配</span></span>
<span class="line"><span>    bool email_valid = MysqlMgr::GetInstance()-&gt;CheckEmail(name, email);</span></span>
<span class="line"><span>    if (!email_valid) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; user email not match&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::EmailNotMatch;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //更新密码为最新密码</span></span>
<span class="line"><span>    bool b_up = MysqlMgr::GetInstance()-&gt;UpdatePwd(name, pwd);</span></span>
<span class="line"><span>    if (!b_up) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; update pwd failed&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::PasswdUpFailed;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;succeed to update password&quot; &lt;&lt; pwd &lt;&lt; std::endl;</span></span>
<span class="line"><span>    root[&quot;error&quot;] = 0;</span></span>
<span class="line"><span>    root[&quot;email&quot;] = email;</span></span>
<span class="line"><span>    root[&quot;user&quot;] = name;</span></span>
<span class="line"><span>    root[&quot;passwd&quot;] = pwd;</span></span>
<span class="line"><span>    root[&quot;varifycode&quot;] = src_root[&quot;varifycode&quot;].asString();</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>    });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Mysql中新增CheckEmail和UpdatePwd函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool MysqlMgr::CheckEmail(const std::string&amp; name, const std::string&amp; email) {</span></span>
<span class="line"><span>    return _dao.CheckEmail(name, email);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool MysqlMgr::UpdatePwd(const std::string&amp; name, const std::string&amp; pwd) {</span></span>
<span class="line"><span>    return _dao.UpdatePwd(name, pwd);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DAO这一层写具体的逻辑, 检测邮箱是否合理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool MysqlDao::CheckEmail(const std::string&amp; name, const std::string&amp; email) {</span></span>
<span class="line"><span>    auto con = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        if (con == nullptr) {</span></span>
<span class="line"><span>            pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 准备查询语句</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::PreparedStatement&gt; pstmt(con-&gt;prepareStatement(&quot;SELECT email FROM user WHERE name = ?&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 绑定参数</span></span>
<span class="line"><span>        pstmt-&gt;setString(1, name);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 执行查询</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::ResultSet&gt; res(pstmt-&gt;executeQuery());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 遍历结果集</span></span>
<span class="line"><span>        while (res-&gt;next()) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;Check Email: &quot; &lt;&lt; res-&gt;getString(&quot;email&quot;) &lt;&lt; std::endl;</span></span>
<span class="line"><span>            if (email != res-&gt;getString(&quot;email&quot;)) {</span></span>
<span class="line"><span>                pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (sql::SQLException&amp; e) {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;SQLException: &quot; &lt;&lt; e.what();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot; (MySQL error code: &quot; &lt;&lt; e.getErrorCode();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;, SQLState: &quot; &lt;&lt; e.getSQLState() &lt;&lt; &quot; )&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新密码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool MysqlDao::UpdatePwd(const std::string&amp; name, const std::string&amp; newpwd) {</span></span>
<span class="line"><span>    auto con = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        if (con == nullptr) {</span></span>
<span class="line"><span>            pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 准备查询语句</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::PreparedStatement&gt; pstmt(con-&gt;prepareStatement(&quot;UPDATE user SET pwd = ? WHERE name = ?&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 绑定参数</span></span>
<span class="line"><span>        pstmt-&gt;setString(2, name);</span></span>
<span class="line"><span>        pstmt-&gt;setString(1, newpwd);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 执行更新</span></span>
<span class="line"><span>        int updateCount = pstmt-&gt;executeUpdate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Updated rows: &quot; &lt;&lt; updateCount &lt;&lt; std::endl;</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (sql::SQLException&amp; e) {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;SQLException: &quot; &lt;&lt; e.what();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot; (MySQL error code: &quot; &lt;&lt; e.getErrorCode();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;, SQLState: &quot; &lt;&lt; e.getSQLState() &lt;&lt; &quot; )&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="day-14-客户端登录功能" tabindex="-1"><a class="header-anchor" href="#day-14-客户端登录功能"><span>Day 14：客户端登录功能</span></a></h1><h2 id="客户端登录功能" tabindex="-1"><a class="header-anchor" href="#客户端登录功能"><span>客户端登录功能</span></a></h2><p>登录界面新增err_tip，用来提示用户登陆结果。至于密码输入框大家可以根据注册界面的逻辑实现隐藏和显示的功能。</p><p>点击登录需要发送http 请求到GateServer，GateServer先验证登录密码，再调用grpc请求给StatusServer，获取聊天服务器ip信息和token信息反馈给客户端。</p><p>结构图如下</p><figure><a href="./all_images/1713230325540.jpg"><img src="/assets/1713230325540-BgSemnjn.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>先实现客户端登录,为登录按钮添加槽函数响应</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::on_login_btn_clicked()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    qDebug()&lt;&lt;&quot;login btn clicked&quot;;</span></span>
<span class="line"><span>    if(checkUserValid() == false){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(checkPwdValid() == false){</span></span>
<span class="line"><span>        return ;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto user = ui-&gt;user_edit-&gt;text();</span></span>
<span class="line"><span>    auto pwd = ui-&gt;pass_edit-&gt;text();</span></span>
<span class="line"><span>    //发送http请求登录</span></span>
<span class="line"><span>    QJsonObject json_obj;</span></span>
<span class="line"><span>    json_obj[&quot;user&quot;] = user;</span></span>
<span class="line"><span>    json_obj[&quot;passwd&quot;] = xorString(pwd);</span></span>
<span class="line"><span>    HttpMgr::GetInstance()-&gt;PostHttpReq(QUrl(gate_url_prefix+&quot;/user_login&quot;),</span></span>
<span class="line"><span>                                        json_obj, ReqId::ID_LOGIN_USER,Modules::LOGINMOD);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加检测函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool LoginDialog::checkUserValid(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto user = ui-&gt;user_edit-&gt;text();</span></span>
<span class="line"><span>    if(user.isEmpty()){</span></span>
<span class="line"><span>        qDebug() &lt;&lt; &quot;User empty &quot; ;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool LoginDialog::checkPwdValid(){</span></span>
<span class="line"><span>    auto pwd = ui-&gt;pass_edit-&gt;text();</span></span>
<span class="line"><span>    if(pwd.length() &lt; 6 || pwd.length() &gt; 15){</span></span>
<span class="line"><span>        qDebug() &lt;&lt; &quot;Pass length invalid&quot;;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在HttpMgr中添加sig_login_mod_finish信号，收到http请求完成回包的槽函数中添加登录模块的响应，将登录模块的消息发送到登录界面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void HttpMgr::slot_http_finish(ReqId id, QString res, ErrorCodes err, Modules mod)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(mod == Modules::REGISTERMOD){</span></span>
<span class="line"><span>        //发送信号通知指定模块http响应结束</span></span>
<span class="line"><span>        emit sig_reg_mod_finish(id, res, err);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(mod == Modules::RESETMOD){</span></span>
<span class="line"><span>        //发送信号通知指定模块http响应结束</span></span>
<span class="line"><span>        emit sig_reset_mod_finish(id, res, err);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if(mod == Modules::LOGINMOD){</span></span>
<span class="line"><span>        emit sig_login_mod_finish(id, res, err);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在LoginDialog的构造函数中添加消息对应的槽函数连接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LoginDialog::LoginDialog(QWidget *parent) :</span></span>
<span class="line"><span>    QDialog(parent),</span></span>
<span class="line"><span>    ui(new Ui::LoginDialog)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span>    connect(ui-&gt;reg_btn, &amp;QPushButton::clicked, this, &amp;LoginDialog::switchRegister);</span></span>
<span class="line"><span>    ui-&gt;forget_label-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;&quot;,&quot;selected&quot;,&quot;selected_hover&quot;,&quot;&quot;);</span></span>
<span class="line"><span>    ui-&gt;forget_label-&gt;setCursor(Qt::PointingHandCursor);</span></span>
<span class="line"><span>    connect(ui-&gt;forget_label, &amp;ClickedLabel::clicked, this, &amp;LoginDialog::slot_forget_pwd);</span></span>
<span class="line"><span>    initHttpHandlers();</span></span>
<span class="line"><span>    //连接登录回包信号</span></span>
<span class="line"><span>    connect(HttpMgr::GetInstance().get(), &amp;HttpMgr::sig_login_mod_finish, this,</span></span>
<span class="line"><span>            &amp;LoginDialog::slot_login_mod_finish);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>initHttpHandlers为初始化http回调逻辑, 并添加_handlers成员</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::initHttpHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //注册获取登录回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_LOGIN_USER, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto user = jsonObj[&quot;user&quot;].toString();</span></span>
<span class="line"><span>        showTip(tr(&quot;登录成功&quot;), true);</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;user is &quot; &lt;&lt; user ;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在LoginDialog中添加槽函数slot_login_mod_finish</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::slot_login_mod_finish(ReqId id, QString res, ErrorCodes err)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(err != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>        showTip(tr(&quot;网络请求错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 解析 JSON 字符串,res需转化为QByteArray</span></span>
<span class="line"><span>    QJsonDocument jsonDoc = QJsonDocument::fromJson(res.toUtf8());</span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(jsonDoc.isNull()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //json解析错误</span></span>
<span class="line"><span>    if(!jsonDoc.isObject()){</span></span>
<span class="line"><span>        showTip(tr(&quot;json解析错误&quot;),false);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //调用对应的逻辑,根据id回调。</span></span>
<span class="line"><span>    _handlers[id](jsonDoc.object());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此客户端登陆请求发送的模块封装完了</p><h2 id="gateserver完善登陆逻辑" tabindex="-1"><a class="header-anchor" href="#gateserver完善登陆逻辑"><span>GateServer完善登陆逻辑</span></a></h2><p>在LogicSystem的构造函数中添加登陆请求的注册。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//用户登录逻辑</span></span>
<span class="line"><span>RegPost(&quot;/user_login&quot;, [](std::shared_ptr&lt;HttpConnection&gt; connection) {</span></span>
<span class="line"><span>    auto body_str = boost::beast::buffers_to_string(connection-&gt;_request.body().data());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;receive body is &quot; &lt;&lt; body_str &lt;&lt; std::endl;</span></span>
<span class="line"><span>    connection-&gt;_response.set(http::field::content_type, &quot;text/json&quot;);</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value src_root;</span></span>
<span class="line"><span>    bool parse_success = reader.parse(body_str, src_root);</span></span>
<span class="line"><span>    if (!parse_success) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot;Failed to parse JSON data!&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::Error_Json;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    auto name = src_root[&quot;user&quot;].asString();</span></span>
<span class="line"><span>    auto pwd = src_root[&quot;passwd&quot;].asString();</span></span>
<span class="line"><span>    UserInfo userInfo;</span></span>
<span class="line"><span>    //查询数据库判断用户名和密码是否匹配</span></span>
<span class="line"><span>    bool pwd_valid = MysqlMgr::GetInstance()-&gt;CheckPwd(name, pwd, userInfo);</span></span>
<span class="line"><span>    if (!pwd_valid) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; user pwd not match&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::PasswdInvalid;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //查询StatusServer找到合适的连接</span></span>
<span class="line"><span>    auto reply = StatusGrpcClient::GetInstance()-&gt;GetChatServer(userInfo.uid);</span></span>
<span class="line"><span>    if (reply.error()) {</span></span>
<span class="line"><span>        std::cout &lt;&lt; &quot; grpc get chat server failed, error is &quot; &lt;&lt; reply.error()&lt;&lt; std::endl;</span></span>
<span class="line"><span>        root[&quot;error&quot;] = ErrorCodes::RPCGetFailed;</span></span>
<span class="line"><span>        std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>        beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;succeed to load userinfo uid is &quot; &lt;&lt; userInfo.uid &lt;&lt; std::endl;</span></span>
<span class="line"><span>    root[&quot;error&quot;] = 0;</span></span>
<span class="line"><span>    root[&quot;user&quot;] = name;</span></span>
<span class="line"><span>    root[&quot;uid&quot;] = userInfo.uid;</span></span>
<span class="line"><span>    root[&quot;token&quot;] = reply.token();</span></span>
<span class="line"><span>    root[&quot;host&quot;] = reply.host();</span></span>
<span class="line"><span>    std::string jsonstr = root.toStyledString();</span></span>
<span class="line"><span>    beast::ostream(connection-&gt;_response.body()) &lt;&lt; jsonstr;</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>    });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在MysqlMgr中添加CheckPwd函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool MysqlMgr::CheckPwd(const std::string&amp; name, const std::string&amp; pwd, UserInfo&amp; userInfo) {</span></span>
<span class="line"><span>    return _dao.CheckPwd(name, pwd, userInfo);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在DAO层添加根据用户名查询sql逻辑,并且判断pwd是否匹配。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool MysqlDao::CheckPwd(const std::string&amp; name, const std::string&amp; pwd, UserInfo&amp; userInfo) {</span></span>
<span class="line"><span>    auto con = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    Defer defer([this, &amp;con]() {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(con));</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        if (con == nullptr) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 准备SQL语句</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::PreparedStatement&gt; pstmt(con-&gt;prepareStatement(&quot;SELECT * FROM user WHERE name = ?&quot;));</span></span>
<span class="line"><span>        pstmt-&gt;setString(1, name); // 将username替换为你要查询的用户名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 执行查询</span></span>
<span class="line"><span>        std::unique_ptr&lt;sql::ResultSet&gt; res(pstmt-&gt;executeQuery());</span></span>
<span class="line"><span>        std::string origin_pwd = &quot;&quot;;</span></span>
<span class="line"><span>        // 遍历结果集</span></span>
<span class="line"><span>        while (res-&gt;next()) {</span></span>
<span class="line"><span>            origin_pwd = res-&gt;getString(&quot;pwd&quot;);</span></span>
<span class="line"><span>            // 输出查询到的密码</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;Password: &quot; &lt;&lt; origin_pwd &lt;&lt; std::endl;</span></span>
<span class="line"><span>            break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (pwd != origin_pwd) {</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        userInfo.name = name;</span></span>
<span class="line"><span>        userInfo.email = res-&gt;getString(&quot;email&quot;);</span></span>
<span class="line"><span>        userInfo.uid = res-&gt;getInt(&quot;uid&quot;);</span></span>
<span class="line"><span>        userInfo.pwd = origin_pwd;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (sql::SQLException&amp; e) {</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;SQLException: &quot; &lt;&lt; e.what();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot; (MySQL error code: &quot; &lt;&lt; e.getErrorCode();</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;, SQLState: &quot; &lt;&lt; e.getSQLState() &lt;&lt; &quot; )&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为要调用grpc访问StatusServer，所以这里先完善协议proto文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>syntax = &quot;proto3&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>package message;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service VarifyService {</span></span>
<span class="line"><span>  rpc GetVarifyCode (GetVarifyReq) returns (GetVarifyRsp) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetVarifyReq {</span></span>
<span class="line"><span>  string email = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetVarifyRsp {</span></span>
<span class="line"><span>  int32 error = 1;</span></span>
<span class="line"><span>  string email = 2;</span></span>
<span class="line"><span>  string code = 3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetChatServerReq {</span></span>
<span class="line"><span>  int32 uid = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetChatServerRsp {</span></span>
<span class="line"><span>  int32 error = 1;</span></span>
<span class="line"><span>  string host = 2;</span></span>
<span class="line"><span>  string port = 3;</span></span>
<span class="line"><span>  string token = 4;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service StatusService {</span></span>
<span class="line"><span>    rpc GetChatServer (GetChatServerReq) returns (GetChatServerRsp) {}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用下面两条命令重新生成pb.h和grpc.pb.h</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\protobuf\\Debug\\protoc.exe --cpp_out=. &quot;message.proto&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>生成grpc.pb.h</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>D:\\cppsoft\\grpc\\visualpro\\third_party\\protobuf\\Debug\\protoc.exe  -I=&quot;.&quot; --grpc_out=&quot;.&quot; --plugin=protoc-gen-grpc=&quot;D:\\cppsoft\\grpc\\visualpro\\Debug\\grpc_cpp_plugin.exe&quot; &quot;message.proto&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这俩命令执行完成后总计生成四个文件</p><figure><a href="./all_images/1713239066360.jpg"><img src="/assets/1713239066360-CIckg03E.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>实现StatusGrpcClient</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span>#include &quot;Singleton.h&quot;</span></span>
<span class="line"><span>#include &quot;ConfigMgr.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using grpc::Channel;</span></span>
<span class="line"><span>using grpc::Status;</span></span>
<span class="line"><span>using grpc::ClientContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using message::GetChatServerReq;</span></span>
<span class="line"><span>using message::GetChatServerRsp;</span></span>
<span class="line"><span>using message::StatusService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class StatusGrpcClient :public Singleton&lt;StatusGrpcClient&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend class Singleton&lt;StatusGrpcClient&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ~StatusGrpcClient() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    GetChatServerRsp GetChatServer(int uid);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    StatusGrpcClient();</span></span>
<span class="line"><span>    std::unique_ptr&lt;StatusConPool&gt; pool_;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;StatusGrpcClient.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GetChatServerRsp StatusGrpcClient::GetChatServer(int uid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ClientContext context;</span></span>
<span class="line"><span>    GetChatServerRsp reply;</span></span>
<span class="line"><span>    GetChatServerReq request;</span></span>
<span class="line"><span>    request.set_uid(uid);</span></span>
<span class="line"><span>    auto stub = pool_-&gt;getConnection();</span></span>
<span class="line"><span>    Status status = stub-&gt;GetChatServer(&amp;context, request, &amp;reply);</span></span>
<span class="line"><span>    Defer defer([&amp;stub, this]() {</span></span>
<span class="line"><span>        pool_-&gt;returnConnection(std::move(stub));</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    if (status.ok()) {    </span></span>
<span class="line"><span>        return reply;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        reply.set_error(ErrorCodes::RPCFailed);</span></span>
<span class="line"><span>        return reply;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>StatusGrpcClient::StatusGrpcClient()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto&amp; gCfgMgr = ConfigMgr::Inst();</span></span>
<span class="line"><span>    std::string host = gCfgMgr[&quot;StatusServer&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    std::string port = gCfgMgr[&quot;StatusServer&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    pool_.reset(new StatusConPool(5, host, port));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然GateServer的config.ini文件也要做更新</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[GateServer]</span></span>
<span class="line"><span>Port = 8080</span></span>
<span class="line"><span>[VarifyServer]</span></span>
<span class="line"><span>Host = 127.0.0.1</span></span>
<span class="line"><span>Port = 50051</span></span>
<span class="line"><span>[StatusServer]</span></span>
<span class="line"><span>Host = 127.0.0.1</span></span>
<span class="line"><span>Port = 50052</span></span>
<span class="line"><span>[Mysql]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 3308</span></span>
<span class="line"><span>User = root</span></span>
<span class="line"><span>Passwd = 123456</span></span>
<span class="line"><span>Schema = llfc</span></span>
<span class="line"><span>[Redis]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 6380</span></span>
<span class="line"><span>Passwd = 123456</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StatusGrpcClient用到了StatusConPool, 将其实现放在StatusGrpcClient类之上</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class StatusConPool {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    StatusConPool(size_t poolSize, std::string host, std::string port)</span></span>
<span class="line"><span>        : poolSize_(poolSize), host_(host), port_(port), b_stop_(false) {</span></span>
<span class="line"><span>        for (size_t i = 0; i &lt; poolSize_; ++i) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            std::shared_ptr&lt;Channel&gt; channel = grpc::CreateChannel(host + &quot;:&quot; + port,</span></span>
<span class="line"><span>                grpc::InsecureChannelCredentials());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            connections_.push(StatusService::NewStub(channel));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ~StatusConPool() {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        Close();</span></span>
<span class="line"><span>        while (!connections_.empty()) {</span></span>
<span class="line"><span>            connections_.pop();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::unique_ptr&lt;StatusService::Stub&gt; getConnection() {</span></span>
<span class="line"><span>        std::unique_lock&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        cond_.wait(lock, [this] {</span></span>
<span class="line"><span>            if (b_stop_) {</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return !connections_.empty();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        //如果停止则直接返回空指针</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return  nullptr;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto context = std::move(connections_.front());</span></span>
<span class="line"><span>        connections_.pop();</span></span>
<span class="line"><span>        return context;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void returnConnection(std::unique_ptr&lt;StatusService::Stub&gt; context) {</span></span>
<span class="line"><span>        std::lock_guard&lt;std::mutex&gt; lock(mutex_);</span></span>
<span class="line"><span>        if (b_stop_) {</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        connections_.push(std::move(context));</span></span>
<span class="line"><span>        cond_.notify_one();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void Close() {</span></span>
<span class="line"><span>        b_stop_ = true;</span></span>
<span class="line"><span>        cond_.notify_all();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    atomic&lt;bool&gt; b_stop_;</span></span>
<span class="line"><span>    size_t poolSize_;</span></span>
<span class="line"><span>    std::string host_;</span></span>
<span class="line"><span>    std::string port_;</span></span>
<span class="line"><span>    std::queue&lt;std::unique_ptr&lt;StatusService::Stub&gt;&gt; connections_;</span></span>
<span class="line"><span>    std::mutex mutex_;</span></span>
<span class="line"><span>    std::condition_variable cond_;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statusserver状态服务" tabindex="-1"><a class="header-anchor" href="#statusserver状态服务"><span>StatusServer状态服务</span></a></h2><p>要实现状态服务，主要是用来监听其他服务器的查询请求, 用visual studio创建项目，名字为StatusServer.</p><p>在主函数所在文件StatusServer.cpp中实现如下逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;json/json.h&gt;</span></span>
<span class="line"><span>#include &lt;json/value.h&gt;</span></span>
<span class="line"><span>#include &lt;json/reader.h&gt;</span></span>
<span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span>#include &quot;ConfigMgr.h&quot;</span></span>
<span class="line"><span>#include &quot;hiredis.h&quot;</span></span>
<span class="line"><span>#include &quot;RedisMgr.h&quot;</span></span>
<span class="line"><span>#include &quot;MysqlMgr.h&quot;</span></span>
<span class="line"><span>#include &quot;AsioIOServicePool.h&quot;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>#include &lt;memory&gt;</span></span>
<span class="line"><span>#include &lt;string&gt;</span></span>
<span class="line"><span>#include &lt;thread&gt;</span></span>
<span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>#include &quot;StatusServiceImpl.h&quot;</span></span>
<span class="line"><span>void RunServer() {</span></span>
<span class="line"><span>    auto &amp; cfg = ConfigMgr::Inst();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::string server_address(cfg[&quot;StatusServer&quot;][&quot;Host&quot;]+&quot;:&quot;+ cfg[&quot;StatusServer&quot;][&quot;Port&quot;]);</span></span>
<span class="line"><span>    StatusServiceImpl service;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    grpc::ServerBuilder builder;</span></span>
<span class="line"><span>    // 监听端口和添加服务</span></span>
<span class="line"><span>    builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());</span></span>
<span class="line"><span>    builder.RegisterService(&amp;service);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 构建并启动gRPC服务器</span></span>
<span class="line"><span>    std::unique_ptr&lt;grpc::Server&gt; server(builder.BuildAndStart());</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;Server listening on &quot; &lt;&lt; server_address &lt;&lt; std::endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建Boost.Asio的io_context</span></span>
<span class="line"><span>    boost::asio::io_context io_context;</span></span>
<span class="line"><span>    // 创建signal_set用于捕获SIGINT</span></span>
<span class="line"><span>    boost::asio::signal_set signals(io_context, SIGINT, SIGTERM);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置异步等待SIGINT信号</span></span>
<span class="line"><span>    signals.async_wait([&amp;server](const boost::system::error_code&amp; error, int signal_number) {</span></span>
<span class="line"><span>        if (!error) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;Shutting down server...&quot; &lt;&lt; std::endl;</span></span>
<span class="line"><span>            server-&gt;Shutdown(); // 优雅地关闭服务器</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 在单独的线程中运行io_context</span></span>
<span class="line"><span>    std::thread([&amp;io_context]() { io_context.run(); }).detach();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 等待服务器关闭</span></span>
<span class="line"><span>    server-&gt;Wait();</span></span>
<span class="line"><span>    io_context.stop(); // 停止io_context</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main(int argc, char** argv) {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        RunServer();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (std::exception const&amp; e) {</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;Error: &quot; &lt;&lt; e.what() &lt;&lt; std::endl;</span></span>
<span class="line"><span>        return EXIT_FAILURE;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return 0;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在开始逻辑之前，需要先更新下config.ini文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>[StatusServer]</span></span>
<span class="line"><span>Port = 50052</span></span>
<span class="line"><span>Host = 0.0.0.0</span></span>
<span class="line"><span>[Mysql]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 3308</span></span>
<span class="line"><span>User = root</span></span>
<span class="line"><span>Passwd = 123456</span></span>
<span class="line"><span>Schema = llfc</span></span>
<span class="line"><span>[Redis]</span></span>
<span class="line"><span>Host = 81.68.86.146</span></span>
<span class="line"><span>Port = 6380</span></span>
<span class="line"><span>Passwd = 123456</span></span>
<span class="line"><span>[ChatServer1]</span></span>
<span class="line"><span>Host = 127.0.0.1</span></span>
<span class="line"><span>Port = 8090</span></span>
<span class="line"><span>[ChatServer2]</span></span>
<span class="line"><span>Host = 127.0.0.1</span></span>
<span class="line"><span>Port = 8091</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后将GateServer之前生成的pb文件和proto文件拷贝到StatusServer中。并且加入到项目中。</p><p>在项目中添加一个新的类StatusServiceImpl，该类主要继承自StatusService::Service。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;grpcpp/grpcpp.h&gt;</span></span>
<span class="line"><span>#include &quot;message.grpc.pb.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using grpc::Server;</span></span>
<span class="line"><span>using grpc::ServerBuilder;</span></span>
<span class="line"><span>using grpc::ServerContext;</span></span>
<span class="line"><span>using grpc::Status;</span></span>
<span class="line"><span>using message::GetChatServerReq;</span></span>
<span class="line"><span>using message::GetChatServerRsp;</span></span>
<span class="line"><span>using message::StatusService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>struct ChatServer {</span></span>
<span class="line"><span>    std::string host;</span></span>
<span class="line"><span>    std::string port;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>class StatusServiceImpl final : public StatusService::Service</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    StatusServiceImpl();</span></span>
<span class="line"><span>    Status GetChatServer(ServerContext* context, const GetChatServerReq* request,</span></span>
<span class="line"><span>        GetChatServerRsp* reply) override;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::vector&lt;ChatServer&gt; _servers;</span></span>
<span class="line"><span>    int _server_index;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;StatusServiceImpl.h&quot;</span></span>
<span class="line"><span>#include &quot;ConfigMgr.h&quot;</span></span>
<span class="line"><span>#include &quot;const.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>std::string generate_unique_string() {</span></span>
<span class="line"><span>    // 创建UUID对象</span></span>
<span class="line"><span>    boost::uuids::uuid uuid = boost::uuids::random_generator()();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将UUID转换为字符串</span></span>
<span class="line"><span>    std::string unique_string = to_string(uuid);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return unique_string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Status StatusServiceImpl::GetChatServer(ServerContext* context, const GetChatServerReq* request, GetChatServerRsp* reply)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    std::string prefix(&quot;llfc status server has received :  &quot;);</span></span>
<span class="line"><span>    _server_index = (_server_index++) % (_servers.size());</span></span>
<span class="line"><span>    auto &amp;server = _servers[_server_index];</span></span>
<span class="line"><span>    reply-&gt;set_host(server.host);</span></span>
<span class="line"><span>    reply-&gt;set_port(server.port);</span></span>
<span class="line"><span>    reply-&gt;set_error(ErrorCodes::Success);</span></span>
<span class="line"><span>    reply-&gt;set_token(generate_unique_string());</span></span>
<span class="line"><span>    return Status::OK;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>StatusServiceImpl::StatusServiceImpl():_server_index(0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto&amp; cfg = ConfigMgr::Inst();</span></span>
<span class="line"><span>    ChatServer server;</span></span>
<span class="line"><span>    server.port = cfg[&quot;ChatServer1&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    server.host = cfg[&quot;ChatServer1&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    _servers.push_back(server);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server.port = cfg[&quot;ChatServer2&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>    server.host = cfg[&quot;ChatServer2&quot;][&quot;Host&quot;];</span></span>
<span class="line"><span>    _servers.push_back(server);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其余的文件为了保持复用，不重复开发，将GateServer中的RedisMgr,MysqlMgr,Singleton,IOSerivePool等统统拷贝过来并添加到项目中。</p><h2 id="联调测试" tabindex="-1"><a class="header-anchor" href="#联调测试"><span>联调测试</span></a></h2><p>启动StatusServer，GateServer以及QT客户端，输入密码和用户名，点击登陆，会看到前端收到登陆成功的消息</p><h1 id="day-15-客户端tcp管理者" tabindex="-1"><a class="header-anchor" href="#day-15-客户端tcp管理者"><span>Day 15：客户端TCP管理者</span></a></h1><h2 id="客户端tcp管理者" tabindex="-1"><a class="header-anchor" href="#客户端tcp管理者"><span>客户端TCP管理者</span></a></h2><p>因为聊天服务要维持一个长链接，方便服务器和客户端双向通信，那么就需要一个TCPMgr来管理TCP连接。</p><p>而实际开发中网络模块一般以单例模式使用，那就基于单例基类和可被分享类创建一个自定义的TcpMgr类，在QT工程中新建TcpMgr类，会生成头文件和源文件，头文件修改如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef TCPMGR_H</span></span>
<span class="line"><span>#define TCPMGR_H</span></span>
<span class="line"><span>#include &lt;QTcpSocket&gt;</span></span>
<span class="line"><span>#include &quot;singleton.h&quot;</span></span>
<span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span>class TcpMgr:public QObject, public Singleton&lt;TcpMgr&gt;,</span></span>
<span class="line"><span>        public std::enable_shared_from_this&lt;TcpMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    TcpMgr();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    QTcpSocket _socket;</span></span>
<span class="line"><span>    QString _host;</span></span>
<span class="line"><span>    uint16_t _port;</span></span>
<span class="line"><span>    QByteArray _buffer;</span></span>
<span class="line"><span>    bool _b_recv_pending;</span></span>
<span class="line"><span>    quint16 _message_id;</span></span>
<span class="line"><span>    quint16 _message_len;</span></span>
<span class="line"><span>public slots:</span></span>
<span class="line"><span>    void slot_tcp_connect(ServerInfo);</span></span>
<span class="line"><span>    void slot_send_data(ReqId reqId, QString data);</span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void sig_con_success(bool bsuccess);</span></span>
<span class="line"><span>    void sig_send_data(ReqId reqId, QString data);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // TCPMGR_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在构造函数中连接网络请求的各种信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>TcpMgr::TcpMgr():_host(&quot;&quot;),_port(0),_b_recv_pending(false),_message_id(0),_message_len(0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    QObject::connect(&amp;_socket, &amp;QTcpSocket::connected, [&amp;]() {</span></span>
<span class="line"><span>           qDebug() &lt;&lt; &quot;Connected to server!&quot;;</span></span>
<span class="line"><span>           // 连接建立后发送消息</span></span>
<span class="line"><span>            emit sig_con_success(true);</span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       QObject::connect(&amp;_socket, &amp;QTcpSocket::readyRead, [&amp;]() {</span></span>
<span class="line"><span>           // 当有数据可读时，读取所有数据</span></span>
<span class="line"><span>           // 读取所有数据并追加到缓冲区</span></span>
<span class="line"><span>           _buffer.append(_socket.readAll());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           QDataStream stream(&amp;_buffer, QIODevice::ReadOnly);</span></span>
<span class="line"><span>           stream.setVersion(QDataStream::Qt_5_0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>           forever {</span></span>
<span class="line"><span>                //先解析头部</span></span>
<span class="line"><span>               if(!_b_recv_pending){</span></span>
<span class="line"><span>                   // 检查缓冲区中的数据是否足够解析出一个消息头（消息ID + 消息长度）</span></span>
<span class="line"><span>                   if (_buffer.size() &lt; static_cast&lt;int&gt;(sizeof(quint16) * 2)) {</span></span>
<span class="line"><span>                       return; // 数据不够，等待更多数据</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                   // 预读取消息ID和消息长度，但不从缓冲区中移除</span></span>
<span class="line"><span>                   stream &gt;&gt; _message_id &gt;&gt; _message_len;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                   //将buffer 中的前四个字节移除</span></span>
<span class="line"><span>                   _buffer = _buffer.mid(sizeof(quint16) * 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                   // 输出读取的数据</span></span>
<span class="line"><span>                   qDebug() &lt;&lt; &quot;Message ID:&quot; &lt;&lt; _message_id &lt;&lt; &quot;, Length:&quot; &lt;&lt; _message_len;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                //buffer剩余长读是否满足消息体长度，不满足则退出继续等待接受</span></span>
<span class="line"><span>               if(_buffer.size() &lt; _message_len){</span></span>
<span class="line"><span>                    _b_recv_pending = true;</span></span>
<span class="line"><span>                    return;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               _b_recv_pending = false;</span></span>
<span class="line"><span>               // 读取消息体</span></span>
<span class="line"><span>               QByteArray messageBody = _buffer.mid(0, _message_len);</span></span>
<span class="line"><span>                qDebug() &lt;&lt; &quot;receive body msg is &quot; &lt;&lt; messageBody ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>               _buffer = _buffer.mid(_message_len);</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       //5.15 之后版本</span></span>
<span class="line"><span>//       QObject::connect(&amp;_socket, QOverload&lt;QAbstractSocket::SocketError&gt;::of(&amp;QTcpSocket::errorOccurred), [&amp;](QAbstractSocket::SocketError socketError) {</span></span>
<span class="line"><span>//           Q_UNUSED(socketError)</span></span>
<span class="line"><span>//           qDebug() &lt;&lt; &quot;Error:&quot; &lt;&lt; _socket.errorString();</span></span>
<span class="line"><span>//       });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // 处理错误（适用于Qt 5.15之前的版本）</span></span>
<span class="line"><span>        QObject::connect(&amp;_socket, static_cast&lt;void (QTcpSocket::*)(QTcpSocket::SocketError)&gt;(&amp;QTcpSocket::error),</span></span>
<span class="line"><span>                            [&amp;](QTcpSocket::SocketError socketError) {</span></span>
<span class="line"><span>               qDebug() &lt;&lt; &quot;Error:&quot; &lt;&lt; _socket.errorString() ;</span></span>
<span class="line"><span>               switch (socketError) {</span></span>
<span class="line"><span>                   case QTcpSocket::ConnectionRefusedError:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Connection Refused!&quot;;</span></span>
<span class="line"><span>                       emit sig_con_success(false);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case QTcpSocket::RemoteHostClosedError:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Remote Host Closed Connection!&quot;;</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case QTcpSocket::HostNotFoundError:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Host Not Found!&quot;;</span></span>
<span class="line"><span>                       emit sig_con_success(false);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case QTcpSocket::SocketTimeoutError:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Connection Timeout!&quot;;</span></span>
<span class="line"><span>                       emit sig_con_success(false);</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   case QTcpSocket::NetworkError:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Network Error!&quot;;</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>                   default:</span></span>
<span class="line"><span>                       qDebug() &lt;&lt; &quot;Other Error!&quot;;</span></span>
<span class="line"><span>                       break;</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>         });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 处理连接断开</span></span>
<span class="line"><span>        QObject::connect(&amp;_socket, &amp;QTcpSocket::disconnected, [&amp;]() {</span></span>
<span class="line"><span>            qDebug() &lt;&lt; &quot;Disconnected from server.&quot;;</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        QObject::connect(this, &amp;TcpMgr::sig_send_data, this, &amp;TcpMgr::slot_send_data);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接对端服务器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TcpMgr::slot_tcp_connect(ServerInfo si)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    qDebug()&lt;&lt; &quot;receive tcp connect signal&quot;;</span></span>
<span class="line"><span>    // 尝试连接到服务器</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;Connecting to server...&quot;;</span></span>
<span class="line"><span>    _host = si.Host;</span></span>
<span class="line"><span>    _port = static_cast&lt;uint16_t&gt;(si.Port.toUInt());</span></span>
<span class="line"><span>    _socket.connectToHost(si.Host, _port);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为客户端发送数据可能在任何线程，为了保证线程安全，在要发送数据时发送TcpMgr的sig_send_data信号，然后实现接受这个信号的槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TcpMgr::slot_send_data(ReqId reqId, QString data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    uint16_t id = reqId;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 将字符串转换为UTF-8编码的字节数组</span></span>
<span class="line"><span>    QByteArray dataBytes = data.toUtf8();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 计算长度（使用网络字节序转换）</span></span>
<span class="line"><span>    quint16 len = static_cast&lt;quint16&gt;(data.size());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建一个QByteArray用于存储要发送的所有数据</span></span>
<span class="line"><span>    QByteArray block;</span></span>
<span class="line"><span>    QDataStream out(&amp;block, QIODevice::WriteOnly);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置数据流使用网络字节序</span></span>
<span class="line"><span>    out.setByteOrder(QDataStream::BigEndian);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 写入ID和长度</span></span>
<span class="line"><span>    out &lt;&lt; id &lt;&lt; len;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加字符串数据</span></span>
<span class="line"><span>    block.append(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 发送数据</span></span>
<span class="line"><span>    _socket.write(block);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后修改LoginDialog中的initHandlers中的收到服务器登陆回复后的逻辑，这里发送信号准备发起长链接到聊天服务器</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::initHttpHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //注册获取登录回包逻辑</span></span>
<span class="line"><span>    _handlers.insert(ReqId::ID_LOGIN_USER, [this](QJsonObject jsonObj){</span></span>
<span class="line"><span>        int error = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(error != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            showTip(tr(&quot;参数错误&quot;),false);</span></span>
<span class="line"><span>            enableBtn(true);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        auto user = jsonObj[&quot;user&quot;].toString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //发送信号通知tcpMgr发送长链接</span></span>
<span class="line"><span>        ServerInfo si;</span></span>
<span class="line"><span>        si.Uid = jsonObj[&quot;uid&quot;].toInt();</span></span>
<span class="line"><span>        si.Host = jsonObj[&quot;host&quot;].toString();</span></span>
<span class="line"><span>        si.Port = jsonObj[&quot;port&quot;].toString();</span></span>
<span class="line"><span>        si.Token = jsonObj[&quot;token&quot;].toString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        _uid = si.Uid;</span></span>
<span class="line"><span>        _token = si.Token;</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;user is &quot; &lt;&lt; user &lt;&lt; &quot; uid is &quot; &lt;&lt; si.Uid &lt;&lt;&quot; host is &quot;</span></span>
<span class="line"><span>                &lt;&lt; si.Host &lt;&lt; &quot; Port is &quot; &lt;&lt; si.Port &lt;&lt; &quot; Token is &quot; &lt;&lt; si.Token;</span></span>
<span class="line"><span>        emit sig_connect_tcp(si);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在LoginDialog构造函数中连接信号，包括建立tcp连接，以及收到TcpMgr连接成功或者失败的信号处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//连接tcp连接请求的信号和槽函数</span></span>
<span class="line"><span> connect(this, &amp;LoginDialog::sig_connect_tcp, TcpMgr::GetInstance().get(), &amp;TcpMgr::slot_tcp_connect);</span></span>
<span class="line"><span>//连接tcp管理者发出的连接成功信号</span></span>
<span class="line"><span>connect(TcpMgr::GetInstance().get(), &amp;TcpMgr::sig_con_success, this, &amp;LoginDialog::slot_tcp_con_finish);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginDialog收到连接结果的槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::slot_tcp_con_finish(bool bsuccess)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if(bsuccess){</span></span>
<span class="line"><span>      showTip(tr(&quot;聊天服务连接成功，正在登录...&quot;),true);</span></span>
<span class="line"><span>      QJsonObject jsonObj;</span></span>
<span class="line"><span>      jsonObj[&quot;uid&quot;] = _uid;</span></span>
<span class="line"><span>      jsonObj[&quot;token&quot;] = _token;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      QJsonDocument doc(jsonObj);</span></span>
<span class="line"><span>      QString jsonString = doc.toJson(QJsonDocument::Indented);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //发送tcp请求给chat server</span></span>
<span class="line"><span>      TcpMgr::GetInstance()-&gt;sig_send_data(ReqId::ID_CHAT_LOGIN, jsonString);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   }else{</span></span>
<span class="line"><span>      showTip(tr(&quot;网络异常&quot;),false);</span></span>
<span class="line"><span>      enableBtn(true);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个槽函数中发送了sig_send_data信号并且通知TcpMgr将数据发送给服务器。</p><p>这样TcpMgr发送完数据收到服务器的回复后就可以进一步根据解析出来的信息处理不同的情况了。先到此为止。具体如何处理后续再讲。</p><h1 id="day-16-chatserver" tabindex="-1"><a class="header-anchor" href="#day-16-chatserver"><span>Day 16：ChatServer</span></a></h1><h2 id="chatserver" tabindex="-1"><a class="header-anchor" href="#chatserver"><span>ChatServer</span></a></h2><p>一个TCP服务器必然会有连接的接收，维持，收发数据等逻辑。那就要基于asio完成这个服务的搭建。主服务是这个样子的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;LogicSystem.h&quot;</span></span>
<span class="line"><span>#include &lt;csignal&gt;</span></span>
<span class="line"><span>#include &lt;thread&gt;</span></span>
<span class="line"><span>#include &lt;mutex&gt;</span></span>
<span class="line"><span>#include &quot;AsioIOServicePool.h&quot;</span></span>
<span class="line"><span>#include &quot;CServer.h&quot;</span></span>
<span class="line"><span>#include &quot;ConfigMgr.h&quot;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>bool bstop = false;</span></span>
<span class="line"><span>std::condition_variable cond_quit;</span></span>
<span class="line"><span>std::mutex mutex_quit;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int main()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        auto &amp;cfg = ConfigMgr::Inst();</span></span>
<span class="line"><span>        auto pool = AsioIOServicePool::GetInstance();</span></span>
<span class="line"><span>        boost::asio::io_context  io_context;</span></span>
<span class="line"><span>        boost::asio::signal_set signals(io_context, SIGINT, SIGTERM);</span></span>
<span class="line"><span>        signals.async_wait([&amp;io_context, pool](auto, auto) {</span></span>
<span class="line"><span>            io_context.stop();</span></span>
<span class="line"><span>            pool-&gt;Stop();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>        auto port_str = cfg[&quot;SelfServer&quot;][&quot;Port&quot;];</span></span>
<span class="line"><span>        CServer s(io_context, atoi(port_str.c_str()));</span></span>
<span class="line"><span>        io_context.run();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    catch (std::exception&amp; e) {</span></span>
<span class="line"><span>        std::cerr &lt;&lt; &quot;Exception: &quot; &lt;&lt; e.what() &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CServer类的声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>#include &quot;CSession.h&quot;</span></span>
<span class="line"><span>#include &lt;memory.h&gt;</span></span>
<span class="line"><span>#include &lt;map&gt;</span></span>
<span class="line"><span>#include &lt;mutex&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>using boost::asio::ip::tcp;</span></span>
<span class="line"><span>class CServer</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    CServer(boost::asio::io_context&amp; io_context, short port);</span></span>
<span class="line"><span>    ~CServer();</span></span>
<span class="line"><span>    void ClearSession(std::string);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    void HandleAccept(shared_ptr&lt;CSession&gt;, const boost::system::error_code &amp; error);</span></span>
<span class="line"><span>    void StartAccept();</span></span>
<span class="line"><span>    boost::asio::io_context &amp;_io_context;</span></span>
<span class="line"><span>    short _port;</span></span>
<span class="line"><span>    tcp::acceptor _acceptor;</span></span>
<span class="line"><span>    std::map&lt;std::string, shared_ptr&lt;CSession&gt;&gt; _sessions;</span></span>
<span class="line"><span>    std::mutex _mutex;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数中监听对方连接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>CServer::CServer(boost::asio::io_context&amp; io_context, short port):_io_context(io_context), _port(port),</span></span>
<span class="line"><span>_acceptor(io_context, tcp::endpoint(tcp::v4(),port))</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    cout &lt;&lt; &quot;Server start success, listen on port : &quot; &lt;&lt; _port &lt;&lt; endl;</span></span>
<span class="line"><span>    StartAccept();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接受连接的函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CServer::StartAccept() {</span></span>
<span class="line"><span>    auto &amp;io_context = AsioIOServicePool::GetInstance()-&gt;GetIOService();</span></span>
<span class="line"><span>    shared_ptr&lt;CSession&gt; new_session = make_shared&lt;CSession&gt;(io_context, this);</span></span>
<span class="line"><span>    _acceptor.async_accept(new_session-&gt;GetSocket(), std::bind(&amp;CServer::HandleAccept, this, new_session, placeholders::_1));</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asioioservicepool" tabindex="-1"><a class="header-anchor" href="#asioioservicepool"><span>AsioIOServicePool</span></a></h2><p>从AsioIOServicePool中返回一个可用的iocontext构造Session，然后将接受的新链接的socket写入这个Session保管。</p><p>AsioIOServicePool已经在前面讲解很多次了，它的声明如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &lt;vector&gt;</span></span>
<span class="line"><span>#include &lt;boost/asio.hpp&gt;</span></span>
<span class="line"><span>#include &quot;Singleton.h&quot;</span></span>
<span class="line"><span>class AsioIOServicePool:public Singleton&lt;AsioIOServicePool&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    friend Singleton&lt;AsioIOServicePool&gt;;</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    using IOService = boost::asio::io_context;</span></span>
<span class="line"><span>    using Work = boost::asio::io_context::work;</span></span>
<span class="line"><span>    using WorkPtr = std::unique_ptr&lt;Work&gt;;</span></span>
<span class="line"><span>    ~AsioIOServicePool();</span></span>
<span class="line"><span>    AsioIOServicePool(const AsioIOServicePool&amp;) = delete;</span></span>
<span class="line"><span>    AsioIOServicePool&amp; operator=(const AsioIOServicePool&amp;) = delete;</span></span>
<span class="line"><span>    // 使用 round-robin 的方式返回一个 io_service</span></span>
<span class="line"><span>    boost::asio::io_context&amp; GetIOService();</span></span>
<span class="line"><span>    void Stop();</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    AsioIOServicePool(std::size_t size = std::thread::hardware_concurrency());</span></span>
<span class="line"><span>    std::vector&lt;IOService&gt; _ioServices;</span></span>
<span class="line"><span>    std::vector&lt;WorkPtr&gt; _works;</span></span>
<span class="line"><span>    std::vector&lt;std::thread&gt; _threads;</span></span>
<span class="line"><span>    std::size_t                        _nextIOService;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AsioIOServicePool具体实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;AsioIOServicePool.h&quot;</span></span>
<span class="line"><span>#include &lt;iostream&gt;</span></span>
<span class="line"><span>using namespace std;</span></span>
<span class="line"><span>AsioIOServicePool::AsioIOServicePool(std::size_t size):_ioServices(size),</span></span>
<span class="line"><span>_works(size), _nextIOService(0){</span></span>
<span class="line"><span>    for (std::size_t i = 0; i &lt; size; ++i) {</span></span>
<span class="line"><span>        _works[i] = std::unique_ptr&lt;Work&gt;(new Work(_ioServices[i]));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //遍历多个ioservice，创建多个线程，每个线程内部启动ioservice</span></span>
<span class="line"><span>    for (std::size_t i = 0; i &lt; _ioServices.size(); ++i) {</span></span>
<span class="line"><span>        _threads.emplace_back([this, i]() {</span></span>
<span class="line"><span>            _ioServices[i].run();</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AsioIOServicePool::~AsioIOServicePool() {</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;AsioIOServicePool destruct&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>boost::asio::io_context&amp; AsioIOServicePool::GetIOService() {</span></span>
<span class="line"><span>    auto&amp; service = _ioServices[_nextIOService++];</span></span>
<span class="line"><span>    if (_nextIOService == _ioServices.size()) {</span></span>
<span class="line"><span>        _nextIOService = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return service;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void AsioIOServicePool::Stop(){</span></span>
<span class="line"><span>    //因为仅仅执行work.reset并不能让iocontext从run的状态中退出</span></span>
<span class="line"><span>    //当iocontext已经绑定了读或写的监听事件后，还需要手动stop该服务。</span></span>
<span class="line"><span>    for (auto&amp; work : _works) {</span></span>
<span class="line"><span>        //把服务先停止</span></span>
<span class="line"><span>        work-&gt;get_io_context().stop();</span></span>
<span class="line"><span>        work.reset();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (auto&amp; t : _threads) {</span></span>
<span class="line"><span>        t.join();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CServer的处理连接逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CServer::HandleAccept(shared_ptr&lt;CSession&gt; new_session, const boost::system::error_code&amp; error){</span></span>
<span class="line"><span>    if (!error) {</span></span>
<span class="line"><span>        new_session-&gt;Start();</span></span>
<span class="line"><span>        lock_guard&lt;mutex&gt; lock(_mutex);</span></span>
<span class="line"><span>        _sessions.insert(make_pair(new_session-&gt;GetUuid(), new_session));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        cout &lt;&lt; &quot;session accept failed, error is &quot; &lt;&lt; error.what() &lt;&lt; endl;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    StartAccept();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session层" tabindex="-1"><a class="header-anchor" href="#session层"><span>Session层</span></a></h2><p>上面的逻辑接受新链接后执行Start函数，新链接接受数据，然后Server继续监听新的连接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CSession::Start(){</span></span>
<span class="line"><span>    AsyncReadHead(HEAD_TOTAL_LEN);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先读取头部数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CSession::AsyncReadHead(int total_len)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    asyncReadFull(HEAD_TOTAL_LEN, [self, this](const boost::system::error_code&amp; ec, std::size_t bytes_transfered) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            if (ec) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;handle read failed, error is &quot; &lt;&lt; ec.what() &lt;&lt; endl;</span></span>
<span class="line"><span>                Close();</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (bytes_transfered &lt; HEAD_TOTAL_LEN) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;read length not match, read [&quot; &lt;&lt; bytes_transfered &lt;&lt; &quot;] , total [&quot;</span></span>
<span class="line"><span>                    &lt;&lt; HEAD_TOTAL_LEN &lt;&lt; &quot;]&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>                Close();</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            _recv_head_node-&gt;Clear();</span></span>
<span class="line"><span>            memcpy(_recv_head_node-&gt;_data, _data, bytes_transfered);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //获取头部MSGID数据</span></span>
<span class="line"><span>            short msg_id = 0;</span></span>
<span class="line"><span>            memcpy(&amp;msg_id, _recv_head_node-&gt;_data, HEAD_ID_LEN);</span></span>
<span class="line"><span>            //网络字节序转化为本地字节序</span></span>
<span class="line"><span>            msg_id = boost::asio::detail::socket_ops::network_to_host_short(msg_id);</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;msg_id is &quot; &lt;&lt; msg_id &lt;&lt; endl;</span></span>
<span class="line"><span>            //id非法</span></span>
<span class="line"><span>            if (msg_id &gt; MAX_LENGTH) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;invalid msg_id is &quot; &lt;&lt; msg_id &lt;&lt; endl;</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            short msg_len = 0;</span></span>
<span class="line"><span>            memcpy(&amp;msg_len, _recv_head_node-&gt;_data + HEAD_ID_LEN, HEAD_DATA_LEN);</span></span>
<span class="line"><span>            //网络字节序转化为本地字节序</span></span>
<span class="line"><span>            msg_len = boost::asio::detail::socket_ops::network_to_host_short(msg_len);</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;msg_len is &quot; &lt;&lt; msg_len &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            //id非法</span></span>
<span class="line"><span>            if (msg_len &gt; MAX_LENGTH) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;invalid data length is &quot; &lt;&lt; msg_len &lt;&lt; endl;</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            _recv_msg_node = make_shared&lt;RecvNode&gt;(msg_len, msg_id);</span></span>
<span class="line"><span>            AsyncReadBody(msg_len);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (std::exception&amp; e) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;Exception code is &quot; &lt;&lt; e.what() &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的逻辑里调用asyncReadFull读取整个长度，然后解析收到的数据，前两个字节为id，之后两个字节为长度，最后n个长度字节为消息内容。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//读取完整长度</span></span>
<span class="line"><span>void CSession::asyncReadFull(std::size_t maxLength, std::function&lt;void(const boost::system::error_code&amp;, std::size_t)&gt; handler )</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ::memset(_data, 0, MAX_LENGTH);</span></span>
<span class="line"><span>    asyncReadLen(0, maxLength, handler);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取指定长度</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>//读取指定字节数</span></span>
<span class="line"><span>void CSession::asyncReadLen(std::size_t read_len, std::size_t total_len, </span></span>
<span class="line"><span>    std::function&lt;void(const boost::system::error_code&amp;, std::size_t)&gt; handler)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    _socket.async_read_some(boost::asio::buffer(_data + read_len, total_len-read_len),</span></span>
<span class="line"><span>        [read_len, total_len, handler, self](const boost::system::error_code&amp; ec, std::size_t  bytesTransfered) {</span></span>
<span class="line"><span>            if (ec) {</span></span>
<span class="line"><span>                // 出现错误，调用回调函数</span></span>
<span class="line"><span>                handler(ec, read_len + bytesTransfered);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (read_len + bytesTransfered &gt;= total_len) {</span></span>
<span class="line"><span>                //长度够了就调用回调函数</span></span>
<span class="line"><span>                handler(ec, read_len + bytesTransfered);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            // 没有错误，且长度不足则继续读取</span></span>
<span class="line"><span>            self-&gt;asyncReadLen(read_len + bytesTransfered, total_len, handler);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取头部成功后，其回调函数内部调用了读包体的逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void CSession::AsyncReadBody(int total_len)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto self = shared_from_this();</span></span>
<span class="line"><span>    asyncReadFull(total_len, [self, this, total_len](const boost::system::error_code&amp; ec, std::size_t bytes_transfered) {</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            if (ec) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;handle read failed, error is &quot; &lt;&lt; ec.what() &lt;&lt; endl;</span></span>
<span class="line"><span>                Close();</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            if (bytes_transfered &lt; total_len) {</span></span>
<span class="line"><span>                std::cout &lt;&lt; &quot;read length not match, read [&quot; &lt;&lt; bytes_transfered &lt;&lt; &quot;] , total [&quot;</span></span>
<span class="line"><span>                    &lt;&lt; total_len&lt;&lt;&quot;]&quot; &lt;&lt; endl;</span></span>
<span class="line"><span>                Close();</span></span>
<span class="line"><span>                _server-&gt;ClearSession(_uuid);</span></span>
<span class="line"><span>                return;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            memcpy(_recv_msg_node-&gt;_data , _data , bytes_transfered);</span></span>
<span class="line"><span>            _recv_msg_node-&gt;_cur_len += bytes_transfered;</span></span>
<span class="line"><span>            _recv_msg_node-&gt;_data[_recv_msg_node-&gt;_total_len] = &#39;\\0&#39;;</span></span>
<span class="line"><span>            cout &lt;&lt; &quot;receive data is &quot; &lt;&lt; _recv_msg_node-&gt;_data &lt;&lt; endl;</span></span>
<span class="line"><span>            //此处将消息投递到逻辑队列中</span></span>
<span class="line"><span>            LogicSystem::GetInstance()-&gt;PostMsgToQue(make_shared&lt;LogicNode&gt;(shared_from_this(), _recv_msg_node));</span></span>
<span class="line"><span>            //继续监听头部接受事件</span></span>
<span class="line"><span>            AsyncReadHead(HEAD_TOTAL_LEN);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        catch (std::exception&amp; e) {</span></span>
<span class="line"><span>            std::cout &lt;&lt; &quot;Exception code is &quot; &lt;&lt; e.what() &lt;&lt; endl;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取包体完成后，在回调中继续读包头。以此循环往复直到读完所有数据。如果对方不发送数据，则回调函数就不会触发。不影响程序执行其他工作，因为采用的是asio异步的读写操作。</p><p>当然解析完包体后会调用LogicSystem单例将解析好的消息封装为逻辑节点传递给逻辑层进行处理。</p><h2 id="logicsystem" tabindex="-1"><a class="header-anchor" href="#logicsystem"><span>LogicSystem</span></a></h2><p>在逻辑层处理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LogicSystem::RegisterCallBacks() {</span></span>
<span class="line"><span>    _fun_callbacks[MSG_CHAT_LOGIN] = std::bind(&amp;LogicSystem::LoginHandler, this,</span></span>
<span class="line"><span>        placeholders::_1, placeholders::_2, placeholders::_3);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void LogicSystem::LoginHandler(shared_ptr&lt;CSession&gt; session, const short &amp;msg_id, const string &amp;msg_data) {</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    reader.parse(msg_data, root);</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;user login uid is  &quot; &lt;&lt; root[&quot;uid&quot;].asInt() &lt;&lt; &quot; user token  is &quot;</span></span>
<span class="line"><span>        &lt;&lt; root[&quot;token&quot;].asString() &lt;&lt; endl;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    std::string return_str = root.toStyledString();</span></span>
<span class="line"><span>    session-&gt;Send(return_str, msg_id);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并在构造函数中注册这些处理流程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LogicSystem::LogicSystem():_b_stop(false){</span></span>
<span class="line"><span>    RegisterCallBacks();</span></span>
<span class="line"><span>    _worker_thread = std::thread (&amp;LogicSystem::DealMsg, this);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span>总结</span></a></h2><p>到此，完成了ChatServer收到QT客户端发送过来的长链接请求，并解析读取的数据，将收到的数据通过tcp发送给对端。接下来还要做ChatServer到GateServer的token验证，判断是否合理，这个教给之后的文章处理。</p><hr><h1 id="day-17-完善proto" tabindex="-1"><a class="header-anchor" href="#day-17-完善proto"><span>Day 17：完善proto</span></a></h1><h2 id="完善proto" tabindex="-1"><a class="header-anchor" href="#完善proto"><span>完善proto</span></a></h2><p>在proto文件里新增登陆验证服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>message LoginReq{</span></span>
<span class="line"><span>    int32 uid = 1;</span></span>
<span class="line"><span>    string token= 2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message LoginRsp {</span></span>
<span class="line"><span>    int32 error = 1;</span></span>
<span class="line"><span>    int32 uid = 2;</span></span>
<span class="line"><span>    string token = 3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service StatusService {</span></span>
<span class="line"><span>    rpc GetChatServer (GetChatServerReq) returns (GetChatServerRsp) {}</span></span>
<span class="line"><span>    rpc Login(LoginReq) returns(LoginRsp);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来是调用grpc命令生成新的pb文件覆盖原有的，并且也拷贝给StatusServer一份</p><p>完善登陆逻辑，先去StatusServer验证token是否合理，如果合理再从内存中寻找用户信息，如果没找到则从数据库加载一份。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LogicSystem::LoginHandler(shared_ptr&lt;CSession&gt; session, const short &amp;msg_id, const string &amp;msg_data) {</span></span>
<span class="line"><span>    Json::Reader reader;</span></span>
<span class="line"><span>    Json::Value root;</span></span>
<span class="line"><span>    reader.parse(msg_data, root);</span></span>
<span class="line"><span>    auto uid = root[&quot;uid&quot;].asInt();</span></span>
<span class="line"><span>    std::cout &lt;&lt; &quot;user login uid is  &quot; &lt;&lt; uid &lt;&lt; &quot; user token  is &quot;</span></span>
<span class="line"><span>        &lt;&lt; root[&quot;token&quot;].asString() &lt;&lt; endl;</span></span>
<span class="line"><span>    //从状态服务器获取token匹配是否准确</span></span>
<span class="line"><span>    auto rsp = StatusGrpcClient::GetInstance()-&gt;Login(uid, root[&quot;token&quot;].asString());</span></span>
<span class="line"><span>    Json::Value  rtvalue;</span></span>
<span class="line"><span>    Defer defer([this, &amp;rtvalue, session]() {</span></span>
<span class="line"><span>        std::string return_str = rtvalue.toStyledString();</span></span>
<span class="line"><span>        session-&gt;Send(return_str, MSG_CHAT_LOGIN_RSP);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rtvalue[&quot;error&quot;] = rsp.error();</span></span>
<span class="line"><span>    if (rsp.error() != ErrorCodes::Success) {</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //内存中查询用户信息</span></span>
<span class="line"><span>    auto find_iter = _users.find(uid);</span></span>
<span class="line"><span>    std::shared_ptr&lt;UserInfo&gt; user_info = nullptr;</span></span>
<span class="line"><span>    if (find_iter == _users.end()) {</span></span>
<span class="line"><span>        //查询数据库</span></span>
<span class="line"><span>        user_info = MysqlMgr::GetInstance()-&gt;GetUser(uid);</span></span>
<span class="line"><span>        if (user_info == nullptr) {</span></span>
<span class="line"><span>            rtvalue[&quot;error&quot;] = ErrorCodes::UidInvalid;</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        _users[uid] = user_info;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        user_info = find_iter-&gt;second;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    rtvalue[&quot;uid&quot;] = uid;</span></span>
<span class="line"><span>    rtvalue[&quot;token&quot;] = rsp.token();</span></span>
<span class="line"><span>    rtvalue[&quot;name&quot;] = user_info-&gt;name;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statusserver验证token" tabindex="-1"><a class="header-anchor" href="#statusserver验证token"><span>StatusServer验证token</span></a></h2><p>在StatusServer验证token之前，需要在StatusServer中的GetServer的服务里将token写入内存</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Status StatusServiceImpl::GetChatServer(ServerContext* context, const GetChatServerReq* request, GetChatServerRsp* reply)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    std::string prefix(&quot;llfc status server has received :  &quot;);</span></span>
<span class="line"><span>    const auto&amp; server = getChatServer();</span></span>
<span class="line"><span>    reply-&gt;set_host(server.host);</span></span>
<span class="line"><span>    reply-&gt;set_port(server.port);</span></span>
<span class="line"><span>    reply-&gt;set_error(ErrorCodes::Success);</span></span>
<span class="line"><span>    reply-&gt;set_token(generate_unique_string());</span></span>
<span class="line"><span>    insertToken(request-&gt;uid(), reply-&gt;token());</span></span>
<span class="line"><span>    return Status::OK;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现登陆验证服务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>Status StatusServiceImpl::Login(ServerContext* context, const LoginReq* request, LoginRsp* reply)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    auto uid = request-&gt;uid();</span></span>
<span class="line"><span>    auto token = request-&gt;token();</span></span>
<span class="line"><span>    std::lock_guard&lt;std::mutex&gt; guard(_token_mtx);</span></span>
<span class="line"><span>    auto iter = _tokens.find(uid);</span></span>
<span class="line"><span>    if (iter == _tokens.end()) {</span></span>
<span class="line"><span>        reply-&gt;set_error(ErrorCodes::UidInvalid);</span></span>
<span class="line"><span>        return Status::OK;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (iter-&gt;second != token) {</span></span>
<span class="line"><span>        reply-&gt;set_error(ErrorCodes::TokenInvalid);</span></span>
<span class="line"><span>        return Status::OK;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    reply-&gt;set_error(ErrorCodes::Success);</span></span>
<span class="line"><span>    reply-&gt;set_uid(uid);</span></span>
<span class="line"><span>    reply-&gt;set_token(token);</span></span>
<span class="line"><span>    return Status::OK;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样当GateServer访问StatusServer的Login服务做验证后，就可以将数据返回给QT前端了。</p><h2 id="客户端处理登陆回包" tabindex="-1"><a class="header-anchor" href="#客户端处理登陆回包"><span>客户端处理登陆回包</span></a></h2><p>QT 的客户端TcpMgr收到请求后要进行对应的逻辑处理。所以在TcpMgr的构造函数中调用initHandlers注册消息</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TcpMgr::initHandlers()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    //auto self = shared_from_this();</span></span>
<span class="line"><span>    _handlers.insert(ID_CHAT_LOGIN_RSP, [this](ReqId id, int len, QByteArray data){</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;handle id is &quot;&lt;&lt; id &lt;&lt; &quot; data is &quot; &lt;&lt; data;</span></span>
<span class="line"><span>        // 将QByteArray转换为QJsonDocument</span></span>
<span class="line"><span>        QJsonDocument jsonDoc = QJsonDocument::fromJson(data);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 检查转换是否成功</span></span>
<span class="line"><span>        if(jsonDoc.isNull()){</span></span>
<span class="line"><span>           qDebug() &lt;&lt; &quot;Failed to create QJsonDocument.&quot;;</span></span>
<span class="line"><span>           return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        QJsonObject jsonObj = jsonDoc.object();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if(!jsonObj.contains(&quot;error&quot;)){</span></span>
<span class="line"><span>            int err = ErrorCodes::ERR_JSON;</span></span>
<span class="line"><span>            qDebug() &lt;&lt; &quot;Login Failed, err is Json Parse Err&quot; &lt;&lt; err ;</span></span>
<span class="line"><span>            emit sig_login_failed(err);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        int err = jsonObj[&quot;error&quot;].toInt();</span></span>
<span class="line"><span>        if(err != ErrorCodes::SUCCESS){</span></span>
<span class="line"><span>            qDebug() &lt;&lt; &quot;Login Failed, err is &quot; &lt;&lt; err ;</span></span>
<span class="line"><span>            emit sig_login_failed(err);</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        UserMgr::GetInstance()-&gt;SetUid(jsonObj[&quot;uid&quot;].toInt());</span></span>
<span class="line"><span>        UserMgr::GetInstance()-&gt;SetName(jsonObj[&quot;name&quot;].toString());</span></span>
<span class="line"><span>        UserMgr::GetInstance()-&gt;SetToken(jsonObj[&quot;token&quot;].toString());</span></span>
<span class="line"><span>        emit sig_swich_chatdlg();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且增加处理请求</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void TcpMgr::handleMsg(ReqId id, int len, QByteArray data)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   auto find_iter =  _handlers.find(id);</span></span>
<span class="line"><span>   if(find_iter == _handlers.end()){</span></span>
<span class="line"><span>        qDebug()&lt;&lt; &quot;not found id [&quot;&lt;&lt; id &lt;&lt; &quot;] to handle&quot;;</span></span>
<span class="line"><span>        return ;</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   find_iter.value()(id,len,data);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h2><p>为管理用户数据，需要创建一个UserMgr类，统一管理用户数据，这么声明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef USERMGR_H</span></span>
<span class="line"><span>#define USERMGR_H</span></span>
<span class="line"><span>#include &lt;QObject&gt;</span></span>
<span class="line"><span>#include &lt;memory&gt;</span></span>
<span class="line"><span>#include &lt;singleton.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class UserMgr:public QObject,public Singleton&lt;UserMgr&gt;,</span></span>
<span class="line"><span>        public std::enable_shared_from_this&lt;UserMgr&gt;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    friend class Singleton&lt;UserMgr&gt;;</span></span>
<span class="line"><span>    ~ UserMgr();</span></span>
<span class="line"><span>    void SetName(QString name);</span></span>
<span class="line"><span>    void SetUid(int uid);</span></span>
<span class="line"><span>    void SetToken(QString token);</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    UserMgr();</span></span>
<span class="line"><span>    QString _name;</span></span>
<span class="line"><span>    QString _token;</span></span>
<span class="line"><span>    int _uid;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // USERMGR_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单实现几个功能</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;usermgr.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>UserMgr::~UserMgr()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void UserMgr::SetName(QString name)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _name = name;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void UserMgr::SetUid(int uid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _uid = uid;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void UserMgr::SetToken(QString token)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _token = token;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>UserMgr::UserMgr()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细和复杂的管理后续不断往这里补充就行了。</p><h2 id="登陆界面" tabindex="-1"><a class="header-anchor" href="#登陆界面"><span>登陆界面</span></a></h2><p>登陆界面响应TcpMgr返回的登陆请求，在其构造函数中添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>   //连接tcp管理者发出的登陆失败信号</span></span>
<span class="line"><span>    connect(TcpMgr::GetInstance().get(), &amp;TcpMgr::sig_login_failed, this, &amp;LoginDialog::slot_login_failed);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>并实现槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void LoginDialog::slot_login_failed(int err)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    QString result = QString(&quot;登录失败, err is %1&quot;)</span></span>
<span class="line"><span>                             .arg(err);</span></span>
<span class="line"><span>    showTip(result,false);</span></span>
<span class="line"><span>    enableBtn(true);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到此完成了登陆的请求和响应，接下来要实现响应登陆成功后跳转到聊天界面。下一篇先实现聊天布局。</p><hr><h1 id="day-18-聊天界面整体展示" tabindex="-1"><a class="header-anchor" href="#day-18-聊天界面整体展示"><span>Day 18：聊天界面整体展示</span></a></h1><h2 id="聊天界面整体展示" tabindex="-1"><a class="header-anchor" href="#聊天界面整体展示"><span>聊天界面整体展示</span></a></h2><p>先看下整体的聊天界面，方便以后逐个功能添加<br><a href="./all_images/1716523002662.jpg"><img src="/assets/1716523002662-C-6Jcj6a.jpg" alt="配图" loading="lazy"></a></p><p>QT Designer中 ui 设计如下<br><a href="./all_images/1716528347175.jpg"><img src="/assets/1716528347175-DYnZnE3v.jpg" alt="配图" loading="lazy"></a></p><p>将聊天对话框分为几个部分：</p><p>1 处为左侧功能切换区域，包括聊天，联系人等。</p><p>2 处为搜索区域，可以搜索联系人，聊天记录等， 搜索框后面的按钮是快速拉人创建群聊的功能。</p><p>3 处为近期聊天联系列表</p><p>4 处为搜索结果列表，包括匹配到的联系人，聊天记录，以及添加联系人的按钮。</p><p>5 处为聊天对象名称和头像的显示区域，这里先做简单演示写死。</p><p>6 处为聊天记录区域。</p><p>7 处为工具栏区域。</p><p>8 处为输入区域</p><p>9 处为发送按钮区域。</p><p>大家可以按照这个布局拖动和修改，达到布局效果。</p><h2 id="创建chatdialog" tabindex="-1"><a class="header-anchor" href="#创建chatdialog"><span>创建ChatDialog</span></a></h2><p>右键项目，选择创建设计师界面类，选择创建QDialog without buttons。对话框的名字为ChatDialog</p><p>创建完成后，在之前登录成功的回调里，跳转到这个对话框。在MainWindow里添加槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void MainWindow::SlotSwitchChat()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _chat_dlg = new ChatDialog();</span></span>
<span class="line"><span>    _chat_dlg-&gt;setWindowFlags(Qt::CustomizeWindowHint|Qt::FramelessWindowHint);</span></span>
<span class="line"><span>    setCentralWidget(_chat_dlg);</span></span>
<span class="line"><span>    _chat_dlg-&gt;show();</span></span>
<span class="line"><span>    _login_dlg-&gt;hide();</span></span>
<span class="line"><span>    this-&gt;setMinimumSize(QSize(1050,900));</span></span>
<span class="line"><span>    this-&gt;setMaximumSize(QWIDGETSIZE_MAX, QWIDGETSIZE_MAX);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在MainWindow的构造函数中添加信号和槽的链接</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>    //连接创建聊天界面信号</span></span>
<span class="line"><span>    connect(TcpMgr::GetInstance().get(),&amp;TcpMgr::sig_swich_chatdlg, this, &amp;MainWindow::SlotSwitchChat);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>并且在TcpMgr中添加信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void sig_swich_chatdlg();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了方便测试，在MainWindow的构造函数中直接发送sig_switch_chatdlg信号，这样程序运行起来就会直接跳转到聊天界面</p><h2 id="chatdialog-ui文件" tabindex="-1"><a class="header-anchor" href="#chatdialog-ui文件"><span>ChatDialog ui文件</span></a></h2><p>ui文件的结构可以参考源码中的结构</p><figure><a href="./all_images/1716603750779.jpg"><img src="/assets/1716603750779-C-F3K-4W.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>按照这个布局拖动并设置宽高即可，接下来需要设置下qss调整颜色</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#side_bar{</span></span>
<span class="line"><span>  background-color:rgb(46,46,46);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重写点击按钮" tabindex="-1"><a class="header-anchor" href="#重写点击按钮"><span>重写点击按钮</span></a></h2><p>为了实现点击效果，继承QPushButton实现按钮的点击效果，包括普通状态，悬浮状态，以及按下状态</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class ClickedBtn:public QPushButton</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ClickedBtn(QWidget * parent = nullptr);</span></span>
<span class="line"><span>    ~ClickedBtn();</span></span>
<span class="line"><span>    void SetState(QString nomal, QString hover, QString press);</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    virtual void enterEvent(QEvent *event) override; // 鼠标进入</span></span>
<span class="line"><span>     virtual void leaveEvent(QEvent *event) override;// 鼠标离开</span></span>
<span class="line"><span>    virtual void mousePressEvent(QMouseEvent *event) override; // 鼠标按下</span></span>
<span class="line"><span>    virtual void mouseReleaseEvent(QMouseEvent *event) override; // 鼠标释放</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    QString _normal;</span></span>
<span class="line"><span>    QString _hover;</span></span>
<span class="line"><span>    QString _press;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来实现其按下，离开进入等资源加载，并且重写这些事件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ClickedBtn::ClickedBtn(QWidget *parent):QPushButton (parent)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>      setCursor(Qt::PointingHandCursor); // 设置光标为小手</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ClickedBtn::~ClickedBtn(){</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ClickedBtn::SetState(QString normal, QString hover, QString press)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _hover = hover;</span></span>
<span class="line"><span>    _normal = normal;</span></span>
<span class="line"><span>    _press = press;</span></span>
<span class="line"><span>    setProperty(&quot;state&quot;,normal);</span></span>
<span class="line"><span>    repolish(this);</span></span>
<span class="line"><span>    update();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ClickedBtn::enterEvent(QEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    setProperty(&quot;state&quot;,_hover);</span></span>
<span class="line"><span>    repolish(this);</span></span>
<span class="line"><span>    update();</span></span>
<span class="line"><span>    QPushButton::enterEvent(event);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ClickedBtn::mousePressEvent(QMouseEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    setProperty(&quot;state&quot;,_press);</span></span>
<span class="line"><span>    repolish(this);</span></span>
<span class="line"><span>    update();</span></span>
<span class="line"><span>    QPushButton::mousePressEvent(event);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ClickedBtn::mouseReleaseEvent(QMouseEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    setProperty(&quot;state&quot;,_hover);</span></span>
<span class="line"><span>    repolish(this);</span></span>
<span class="line"><span>    update();</span></span>
<span class="line"><span>    QPushButton::mouseReleaseEvent(event);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到chatdialog.ui文件，将add_btn升级为ClickedBtn</p><p>接着在qss文件中添加样式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#add_btn[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_normal.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#add_btn[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_hover.png);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#add_btn[state=&#39;press&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_hover.png);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>add_btn的样式一定要显示设置一下三个样式，所以回到ChatDialog的构造函数中设置样式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span> ui-&gt;add_btn-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>再次启动运行，可以看到添加群组的按钮样式和sidebar的样式生效了。</p><p>为了美观显示，去mainwindow.ui中移除状态栏和菜单栏。</p><hr><h1 id="day-19-搜索框" tabindex="-1"><a class="header-anchor" href="#day-19-搜索框"><span>Day 19：搜索框</span></a></h1><h2 id="搜索框" tabindex="-1"><a class="header-anchor" href="#搜索框"><span>搜索框</span></a></h2><p>需要实现如下效果</p><figure><a href="./all_images/1717211817129.jpg"><img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABWCAYAAAAtzDh/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAnCSURBVHhe7Zz9cxXVHcb5i/h3+oNTp+3UTmmJrWihQieipVQwrbUIFUXR+FYUyzBYhkIBR6d0Cq2Ut0CSJiCQF/L+ckPegK/32eyme/c+Z7N77+Ym4Tzfmc+4Oed7rig8H/eePeu62bFx85OJGGw+It5XzUwIG1tk3EGWnkKZDEmb40yvSkpV3F9BpiImsjLlIGtfPko58FgMAEFm4xGVgc9L44NfK1wGSXg4V5K4FCbL4YzgwW0E1aFOIx5cNh8R76sNFv40PBQDQsvGk1QHPS8VYgA0lDHYGsB6C4NLII3qgK4ELimsRTGwuYjKgNcCC/5SeCaGeHDZfJx4b3INm+PkCjrrjWD9dcODn4XqoDaKuBAWqJTCCsuBhjukPF8F61uEBz0NFvJakBicxHuTa9icm0whZ31x2Jq64aHPAg9tI0iKgUkBkNA2gnKgkwQhL89RonkKD38aLOS14Pkew1IkQ+4az4Yz6OGYszcivqYwePDTqA7ryrNqxJCABz4LPPhFwESQRJuPdDxOZWDrgQY9vM7UH1EV7nrhAmCwUEZk6VlOlpZC46Wx9F0Bgwd66fnsMBnEeczEEIWKzTHy9Ee9aWuSPdWwoLM+wHoXoQGvh0oBMKbLfQtUh7K6d6Wo/KqxENC4NBorh3xi4CFeIGtfdpgQIiSGmvqXWhPv40QBZ3NxKmQQpyLURVEd8P8TSWFtiQFja18MWfvywYQQoT2G3CCwbDxJdcjroTFyqA54JVwKEVEfm1tpVkIKoDrURcCDXitUDOvXr7fp6WkhxGPO2NhYZiQGITyBCcCFxCCEJzABuJAYhPAEJgAXEoMQnsAE4EJiEMITmABcSAxCeAITgAuJQQhPYAJwITEI4QlMAC4kBiE8gQnAhcQghCcwAbiQGITwBCYAFxKDEJ7ABOBCYhDCE5gAXEgMQngCE4ALiUEIT2ACcCExCOEJTAAuJAYhPIEJwEVmMYyPjwshYrCcrGaYAFxIDELUCMvJaoYJwEVuMahUvpfEEKMWMUxPz9iN9k775PBRe/WP+23nrtdsz7637fPjp+zO3R6bm5sLO1Wq5akHDx5Yf/+AffHlOXvzwPu2q+X1AFxjDHPoyVPLJQYEsru7265evWo3btywO3fu2MTEBO2thWT401g2Mdy922u7y78BG3/2vDW/uMv2vnHQPvjosP1hz5u2tXmnNf18q733/iEbHh4JV6hUxdajR4/ssyOf24aNm+07T/yIgjn0oDdrLYcYhoaG7MqVK3bp0qUKIIiRkRG6Ji9MAC6WRQznL1y0pzdts5ZX99n/um7aZKlks7Nz9rD8L39mZtbGJybtH+fO26ZfNNszzzXb4OBwuLKYWrduXXil8rV6evuCO9QnntxAhRAHPejFmixVtBhGR0ft+vXrVVKIwBx62No8MAG4KFwM39y+az9p2mL732q1UmkqHOV18+Y35buJ3fbK7/aWb5kmw9H6S2JQvdyyh0ogDazJUkWLob+/n94tRGDu3r17dG0emABcFCoG7Cng68O25t/awMBQOJpeIyOjtqFps3362bFwpLaCDCIhSAz+FvYLTpw8Y9/9/kYa/jSwBmuX2nMoWgw9PT1UCBGXL1+2vr4+ujYPTAAuChVDZ2e3fe+HTwdfE/LU306dtV9u21H+BWXfw2AlMaj6+u8F+1rxwL/b+md7+92P7MkfNC2O4RpjmIv3Yi0+I62KFgNCj/AzKQDcMQwODtK1eWACcFGoGA7/5Zg9u2V7uW8iHMlWXd23bNPmF+zCv/8bjtRWEoPq72e+rAg6gADwZ7L1w0/LdwU/DcA19rowl+zHZ6RV0WLA/sG1a9eoFAD2GIr4+zEBuChUDHgk+drrb9ns7Gw4kq1GR8fs+V/9xo6fOB2O1FYSg2r/gdaqoOPuACLA19tDh48G4Bpj8buICHxGWhUtBoCvE2yfoa2trZC7BcAE4KJQMWBnt/WDT+zhw4fhSLaCSLAJefTYiXAkW0EASaJxlZ+FMwrJoAPcJUAIE5OTAbjGGOvFZ6TVcojh/v37QSC7uroCGeAO4tatW8EY66+FePCXolAx7P3TO/byK3vK/5DT4Ui26usfsC3bduTam2DhlxhUa1UMjYAJwEWhYsCOLjZvBofynUu41tYenGlo7+gKR5YuiUHFCicak0HP+1UCn5FWRYsBdwulUsmGh4fLv66BYDOyt7c3eESJMQR1amqKrs1DMvxpFCoGnHZ86seb7NhfT4Yj2WrfGwftxR0tS557iJfEoGKFY87JoB9458Pyn12++Yi5ZD8+I62KEgOEAAlEXx9wFBpEew3Rz0U8qgRMAC4KFQPefcAx56ZntlpHZ7b/+v/n4mV7asOz9vXFK+FItpIYVKzw7kPyCPTB9z4OBBC/O8A1xjAX78VafEZa1SsGCAF3Ap2dnVWbjXGS5xfwdALEPysPTAAuChUDCu8+4JgzNhNxeCmt5ubmg5eqduz8vU1OlsLRbJUMP36WGFQ4nIR3H7IchU6CNVi73AecEPa0x5MRHR0d5VxMLq5b02JA4d0HHHPGiUYcXsI5BTySnJ+fL3/GRPDG5bl/XgieRmAOlv740JHcb7lFMogLIf6zys/CC1F4QsbCnwbWZHmZql4xZJECwFMJ3F1EQsAdBL5m1CoIJgAXyyIGFN59wDFnnGjE4SWcU3jhpd3BcWlsNG7/dUuwO4z61/mv7bkt2+302a9yy4GVxKDCC1F49yHL0Wj0oLdRL1ExCTBu375dIQZIAXJY02KICseccaIRh5eOHD1uJ099YW3XO6oOQUEOeCMTf623JAZVVNGTMiYEgDn05KlGiQF7EHhaEa2rVQgRTAAull0MWWt+/oGdPvNV+TfpbDiiUtVfuAPFuw845owTjTijAHCNMczlvUutVwzt7e1UBElwd4DHl9E6L8WgUq2VqlcMKwUTgIvcYhBCLMByspphAnAhMQhRIywnqxkmABeZxSCEWNswAbiQGITwBCYAFxKDEJ7ABOBCYhDCE5gAXEgMQngCE4ALiUEIT2ACcCExCOEJTAAuJAYhPIEJwIXEIIQnMAG4kBiE8AQmABcSgxCewATgQmIQwhOYAFxIDEJ4AhOAC4lBCE9gAnAhMQjhCUwALiQGITyBCcCFxCCEJzABuJAYhPAEJgAXgRjwf6IVQjzeMAG4kBiE8AQmABcSgxCewATgQmIQwhOYAFxIDEJ4AhOAC4lBCE9gAnAhMQjhCUwALiQGITyBCcCFxCCEJzABuJAYhPAEJgAXgRimp2eEEI85TAAuJAYhPIEJwIXEIIQnMAG4kBiE8AQmABcSgxCewATgQmIQwhOYADhj9i0lQwl/+m098QAAAABJRU5ErkJggg==" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>输入框默认不显示关闭按钮，当输入文字后显示关闭按钮，点击关闭按钮清空文字</p><p>添加CustomizeEdit类，头文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef CUSTOMIZEEDIT_H</span></span>
<span class="line"><span>#define CUSTOMIZEEDIT_H</span></span>
<span class="line"><span>#include &lt;QLineEdit&gt;</span></span>
<span class="line"><span>#include &lt;QDebug&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CustomizeEdit: public QLineEdit</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    CustomizeEdit(QWidget *parent = nullptr);</span></span>
<span class="line"><span>    void SetMaxLength(int maxLen);</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    void focusOutEvent(QFocusEvent *event) override</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        // 执行失去焦点时的处理逻辑</span></span>
<span class="line"><span>        //qDebug() &lt;&lt; &quot;CustomizeEdit focusout&quot;;</span></span>
<span class="line"><span>        // 调用基类的focusOutEvent()方法，保证基类的行为得到执行</span></span>
<span class="line"><span>        QLineEdit::focusOutEvent(event);</span></span>
<span class="line"><span>        //发送失去焦点得信号</span></span>
<span class="line"><span>        emit sig_foucus_out();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    void limitTextLength(QString text) {</span></span>
<span class="line"><span>        if(_max_len &lt;= 0){</span></span>
<span class="line"><span>            return;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        QByteArray byteArray = text.toUtf8();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (byteArray.size() &gt; _max_len) {</span></span>
<span class="line"><span>            byteArray = byteArray.left(_max_len);</span></span>
<span class="line"><span>            this-&gt;setText(QString::fromUtf8(byteArray));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    int _max_len;</span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void sig_foucus_out();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // CUSTOMIZEEDIT_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;customizeedit.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CustomizeEdit::CustomizeEdit(QWidget *parent):QLineEdit (parent),_max_len(0)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    connect(this, &amp;QLineEdit::textChanged, this, &amp;CustomizeEdit::limitTextLength);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void CustomizeEdit::SetMaxLength(int maxLen)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _max_len = maxLen;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设计师界面类里将<code>ui-&gt;search_edit</code>提升为CustomizeEdit</p><p>在ChatDialog的构造函数中设置输入的长度限制以及关闭等图标的配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>    QAction *searchAction = new QAction(ui-&gt;search_edit);</span></span>
<span class="line"><span>    searchAction-&gt;setIcon(QIcon(&quot;:/res/search.png&quot;));</span></span>
<span class="line"><span>    ui-&gt;search_edit-&gt;addAction(searchAction,QLineEdit::LeadingPosition);</span></span>
<span class="line"><span>    ui-&gt;search_edit-&gt;setPlaceholderText(QStringLiteral(&quot;搜索&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建一个清除动作并设置图标</span></span>
<span class="line"><span>    QAction *clearAction = new QAction(ui-&gt;search_edit);</span></span>
<span class="line"><span>    clearAction-&gt;setIcon(QIcon(&quot;:/res/close_transparent.png&quot;));</span></span>
<span class="line"><span>    // 初始时不显示清除图标</span></span>
<span class="line"><span>    // 将清除动作添加到LineEdit的末尾位置</span></span>
<span class="line"><span>    ui-&gt;search_edit-&gt;addAction(clearAction, QLineEdit::TrailingPosition);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 当需要显示清除图标时，更改为实际的清除图标</span></span>
<span class="line"><span>    connect(ui-&gt;search_edit, &amp;QLineEdit::textChanged, [clearAction](const QString &amp;text) {</span></span>
<span class="line"><span>        if (!text.isEmpty()) {</span></span>
<span class="line"><span>            clearAction-&gt;setIcon(QIcon(&quot;:/res/close_search.png&quot;));</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            clearAction-&gt;setIcon(QIcon(&quot;:/res/close_transparent.png&quot;)); // 文本为空时，切换回透明图标</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 连接清除动作的触发信号到槽函数，用于清除文本</span></span>
<span class="line"><span>    connect(clearAction, &amp;QAction::triggered, [this, clearAction]() {</span></span>
<span class="line"><span>        ui-&gt;search_edit-&gt;clear();</span></span>
<span class="line"><span>        clearAction-&gt;setIcon(QIcon(&quot;:/res/close_transparent.png&quot;)); // 清除文本后，切换回透明图标</span></span>
<span class="line"><span>        ui-&gt;search_edit-&gt;clearFocus();</span></span>
<span class="line"><span>        //清除按钮被按下则不显示搜索框</span></span>
<span class="line"><span>        //ShowSearch(false);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ui-&gt;search_edit-&gt;SetMaxLength(15);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stylesheet.qss 中修改样式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#search_wid{</span></span>
<span class="line"><span>     background-color:rgb(247,247,247);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#search_edit {</span></span>
<span class="line"><span>    border: 2px solid #f1f1f1;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="聊天记录列表" tabindex="-1"><a class="header-anchor" href="#聊天记录列表"><span>聊天记录列表</span></a></h2><p>创建C++ 类ChatUserList</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef CHATUSERLIST_H</span></span>
<span class="line"><span>#define CHATUSERLIST_H</span></span>
<span class="line"><span>#include &lt;QListWidget&gt;</span></span>
<span class="line"><span>#include &lt;QWheelEvent&gt;</span></span>
<span class="line"><span>#include &lt;QEvent&gt;</span></span>
<span class="line"><span>#include &lt;QScrollBar&gt;</span></span>
<span class="line"><span>#include &lt;QDebug&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ChatUserList: public QListWidget</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    ChatUserList(QWidget *parent = nullptr);</span></span>
<span class="line"><span>protected:</span></span>
<span class="line"><span>    bool eventFilter(QObject *watched, QEvent *event) override;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span>    void sig_loading_chat_user();</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // CHATUSERLIST_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;chatuserlist.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ChatUserList::ChatUserList(QWidget *parent):QListWidget(parent)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_UNUSED(parent);</span></span>
<span class="line"><span>     this-&gt;setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);</span></span>
<span class="line"><span>     this-&gt;setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);</span></span>
<span class="line"><span>    // 安装事件过滤器</span></span>
<span class="line"><span>    this-&gt;viewport()-&gt;installEventFilter(this);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool ChatUserList::eventFilter(QObject *watched, QEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 检查事件是否是鼠标悬浮进入或离开</span></span>
<span class="line"><span>    if (watched == this-&gt;viewport()) {</span></span>
<span class="line"><span>        if (event-&gt;type() == QEvent::Enter) {</span></span>
<span class="line"><span>            // 鼠标悬浮，显示滚动条</span></span>
<span class="line"><span>            this-&gt;setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);</span></span>
<span class="line"><span>        } else if (event-&gt;type() == QEvent::Leave) {</span></span>
<span class="line"><span>            // 鼠标离开，隐藏滚动条</span></span>
<span class="line"><span>            this-&gt;setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 检查事件是否是鼠标滚轮事件</span></span>
<span class="line"><span>    if (watched == this-&gt;viewport() &amp;&amp; event-&gt;type() == QEvent::Wheel) {</span></span>
<span class="line"><span>        QWheelEvent *wheelEvent = static_cast&lt;QWheelEvent*&gt;(event);</span></span>
<span class="line"><span>        int numDegrees = wheelEvent-&gt;angleDelta().y() / 8;</span></span>
<span class="line"><span>        int numSteps = numDegrees / 15; // 计算滚动步数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 设置滚动幅度</span></span>
<span class="line"><span>        this-&gt;verticalScrollBar()-&gt;setValue(this-&gt;verticalScrollBar()-&gt;value() - numSteps);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 检查是否滚动到底部</span></span>
<span class="line"><span>        QScrollBar *scrollBar = this-&gt;verticalScrollBar();</span></span>
<span class="line"><span>        int maxScrollValue = scrollBar-&gt;maximum();</span></span>
<span class="line"><span>        int currentValue = scrollBar-&gt;value();</span></span>
<span class="line"><span>        //int pageSize = 10; // 每页加载的联系人数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (maxScrollValue - currentValue &lt;= 0) {</span></span>
<span class="line"><span>            // 滚动到底部，加载新的联系人</span></span>
<span class="line"><span>            qDebug()&lt;&lt;&quot;load more chat user&quot;;</span></span>
<span class="line"><span>            //发送信号通知聊天界面加载更多聊天内容</span></span>
<span class="line"><span>            emit sig_loading_chat_user();</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return true; // 停止事件传递</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return QListWidget::eventFilter(watched, event);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在设计师界面类里提升<code>ui-&gt;chat_user_list</code>为ChatUserList</p><p>在ChatDialog构造函数和搜索清除按钮的回调中增加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span> ShowSearch(false);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该函数的具体实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ChatDialog::ShowSearch(bool bsearch)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(bsearch){</span></span>
<span class="line"><span>        ui-&gt;chat_user_list-&gt;hide();</span></span>
<span class="line"><span>        ui-&gt;con_user_list-&gt;hide();</span></span>
<span class="line"><span>        ui-&gt;search_list-&gt;show();</span></span>
<span class="line"><span>        _mode = ChatUIMode::SearchMode;</span></span>
<span class="line"><span>    }else if(_state == ChatUIMode::ChatMode){</span></span>
<span class="line"><span>        ui-&gt;chat_user_list-&gt;show();</span></span>
<span class="line"><span>        ui-&gt;con_user_list-&gt;hide();</span></span>
<span class="line"><span>        ui-&gt;search_list-&gt;hide();</span></span>
<span class="line"><span>        _mode = ChatUIMode::ChatMode;</span></span>
<span class="line"><span>    }else if(_state == ChatUIMode::ContactMode){</span></span>
<span class="line"><span>        ui-&gt;chat_user_list-&gt;hide();</span></span>
<span class="line"><span>        ui-&gt;search_list-&gt;hide();</span></span>
<span class="line"><span>        ui-&gt;con_user_list-&gt;show();</span></span>
<span class="line"><span>        _mode = ChatUIMode::ContactMode;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ChatDialog类中声明添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>    ChatUIMode _mode;</span></span>
<span class="line"><span>    ChatUIMode _state;</span></span>
<span class="line"><span>    bool _b_loading;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数的初始化列表初始化这些模式和状态</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ChatDialog::ChatDialog(QWidget *parent) :</span></span>
<span class="line"><span>    QDialog(parent),</span></span>
<span class="line"><span>    ui(new Ui::ChatDialog),_mode(ChatUIMode::ChatMode),</span></span>
<span class="line"><span>    _state(ChatUIMode::ChatMode),_b_loading(false){//...}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让用户聊天列表更美观，修改qss文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#chat_user_wid{</span></span>
<span class="line"><span>    background-color:rgb(0,0,0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#chat_user_list {</span></span>
<span class="line"><span>    background-color: rgb(247,247,248);</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#chat_user_list::item:selected {</span></span>
<span class="line"><span>    background-color: #d3d7d4;</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#chat_user_list::item:hover {</span></span>
<span class="line"><span>    background-color: rgb(206,207,208);</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#chat_user_list::focus {</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>    outline: none;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加聊天item" tabindex="-1"><a class="header-anchor" href="#添加聊天item"><span>添加聊天item</span></a></h2><p>要为聊天列表添加item，每个item包含的样式为</p><figure><a href="./all_images/1717215988933.jpg"><img src="/assets/1717215988933-BbNl0Th7.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>对于这样的列表元素，采用设计师界面类设计非常方便, 新建设计师界面类ChatUserWid, 在ChatUserWid.ui中拖动布局如下</p><figure><a href="./all_images/1717217007100.jpg"><img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAcsAAABvCAYAAACD+OsLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAabSURBVHhe7d3Rjtw0FAbguUKIJwEkWi7bXkG5oL2Ad6C8cN9owKrCuuY49mQnO47zjfQxmeMz2QTJ+Z3QLpdffn1/BQDq/gvLb7797vrq9c8AQOGS/iEsAaBOWAJAg7AEgAZhCQANwhIAGoQlADR0h+Xlcg1FvcCTaN4kUS/wJJo3SdS7t5vC8vPnz1951EHDkZg7sM1Ic0dYws7MHdhmpLnz7LD08vJaf5k7Xl7bXrW5E2XU3na/s0z7juolfTF9sSP1rc2dI53HGn0xfbHevq25swd/wAd2Fs2bJOoFnkTzJol699Ydlrn0iupn8P0PP9q2bdv2w7fPpPdOdE/CEoChCcuDOeuqDuCRhCUA3TyGfRxhCcDQhOXBeAwL8PKEJQDdPIZ9HGEJwNAOHZa1g08rn3z18+btu6/GatvL/tZ60nvqa/Uk9/q5i/Ln1tT+vZT0xfTF9MX0fZGuTfn1aabrbv7+SO4sAQ4iCpQzGCIs00EISwBGNURYfvr09/Wvf90rLGdY+dTOYannv9Q3H6/Vc61xgFvNfN1NhgjLP/74865heSa10OupC0zgVjOE4hbC8uCeE5YA9JkyLGd+HFDWhSUwgpmvu4k7y4O7JRRTLVcby+sAuRlCcQtheXC1cLulnteEJcD/eQw7qNo5lPV7hyXAFjNfd5NDh2Xvwc/cFwVd6usJy2V/ea22v7IW0RfTF9MXG70v/w05a2Y536Wvt39PHsNukEKttFaPxpZ6PpbXAPhiyrA802NYgBF4DLs/d5YAB3HWBbuwBIAGj2EHVTuHs67qgLHNfN1N3FkC0O2sC3ZhCQANQ4Sl/0XX/9XO4ayrOmBsM193kyHC8tXr19ef/uXOEmBsZ12wDxGW73/77fr7h483h2XvweuL6Yvpi+mL6YvN1tfbv6fLh48fN4VlVE9mfhxw1lUdMLaZr7vJocLycrmGol4A7u9sC/Yoc5Kod283hWX+u02TRx00APMbKXfuHpYzPw4426oOOIYt16Z0DY9qi3KslPfWvhPVaqJzmDosAdjHvRbsyzW8rK19LvWMt3pahCUAD5Wu4VF9UY63PpfSeKun5bBhGSn7ZnhUWTuHGc4NmM+Wa1MtyJZQisZyS1/Uv3wu62uic4gyJyn7XkJ3WObW/uoIAPu454K9FWS3jkcB2dpHryn/niUA47s1DFvysCyVvbc6dFjWDr5c+fSe5Eh90eot9fWs6kY6j4i+mL6YvthofVuuuynE8r4y1PLP0f6i/rKv7FlE+6tdd/P3R3JnCXAQPQv2HinEFj31ZSyqrfXXxm4lLAGgYcqwvNfK55Fq5zDDuQHzmfm6m7izBKDbWRfswhIAGjyGHVTtHM66qgPGNvN1N3FnCUC3sy7YheVJ1P4Ida3+KD3HM9LxAufgMeygauew1MvA6A2QWk/Pd9cs3y/ft2p9vxx/7s8Dnmfm625y6LDsPfhZ+/KAyLfX9lfrWwubnuNL3099y37utb9oLMn3n//cNT0/N9EX0xc7W9+bt+/CemmW8136evv35DHsRnlA9IRFUuvr/X7N8v3yfavW98vx5/48gDVThuUZHsMmKSByeV9UW+plrVWvjeWWnvI9H89r+edybKnln/P6Lf3Ay/AYdn/uLDfKA6JnO/q8Vl/bTyT1LMp6bbvszcfWauV4bT/Afc0QilsIywOrhUfazi31sq9Vz2u17+WWnrK3tp+1fUZjvd8FuDePYQdVO4e8XguPtSCpjUX13n0ulp6yt7aftX1GY73fBV7ezNfdxJ3lQaWwKMMj+rzU8s899XI/ea1m6Yv6y/0sn8vevN4zntfzPmAfM4TiFsISABo8hh1U7RzOuqoDxjbzdTeZ+s4yP/EjbgOMpnWNuvU6N9p2zaHDsvfg9cX0xfTF9MX0xWbr6+3fk/9meYOeFRAA9yUsAeh21gW7sASABmF5MB7DArw8YQlAN49hH0dYAjA0YXkw+arOtm3bth+1fTaHCsvL5RqKeoEn0bxJol7gSTRvkqh3bzeFZfmLtB910HAk5g5sM9LceXZYpttjoM7cgW1qcyfKqL25s4SdmTuwzUhzR1jCzswd2GakueMP+MDOonmTRL3Ak2jeJFHv3rrDEgDOSlgCQIOwBIAGYQkADcISABqEJQA0CEsAaBCWANAgLAGgQVgCQIOwBIAGYQkADcISABqEJQA0CEsAaBCWANAgLAGgQVgCQIOwBIAGYQkADcISABqEJQA0CEsAaBCWANAgLAFg1c/XfwDNDIlxIx7m2wAAAABJRU5ErkJggg==" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>定义一个基类ListItemBase</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef LISTITEMBASE_H</span></span>
<span class="line"><span>#define LISTITEMBASE_H</span></span>
<span class="line"><span>#include &lt;QWidget&gt;</span></span>
<span class="line"><span>#include &quot;global.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ListItemBase : public QWidget</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    explicit ListItemBase(QWidget *parent = nullptr);</span></span>
<span class="line"><span>    void SetItemType(ListItemType itemType);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ListItemType GetItemType();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    ListItemType _itemType;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public slots:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>signals:</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // LISTITEMBASE_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现这个基类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;listitembase.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ListItemBase::ListItemBase(QWidget *parent) : QWidget(parent)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ListItemBase::SetItemType(ListItemType itemType)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _itemType = itemType;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ListItemType ListItemBase::GetItemType()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    return _itemType;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现ChatUserWid</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#ifndef CHATUSERWID_H</span></span>
<span class="line"><span>#define CHATUSERWID_H</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;QWidget&gt;</span></span>
<span class="line"><span>#include &quot;listitembase.h&quot;</span></span>
<span class="line"><span>namespace Ui {</span></span>
<span class="line"><span>class ChatUserWid;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ChatUserWid : public ListItemBase</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    Q_OBJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    explicit ChatUserWid(QWidget *parent = nullptr);</span></span>
<span class="line"><span>    ~ChatUserWid();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    QSize sizeHint() const override {</span></span>
<span class="line"><span>        return QSize(250, 70); // 返回自定义的尺寸</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    void SetInfo(QString name, QString head, QString msg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private:</span></span>
<span class="line"><span>    Ui::ChatUserWid *ui;</span></span>
<span class="line"><span>    QString _name;</span></span>
<span class="line"><span>    QString _head;</span></span>
<span class="line"><span>    QString _msg;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#endif // CHATUSERWID_H</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>#include &quot;chatuserwid.h&quot;</span></span>
<span class="line"><span>#include &quot;ui_chatuserwid.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ChatUserWid::ChatUserWid(QWidget *parent) :</span></span>
<span class="line"><span>    ListItemBase(parent),</span></span>
<span class="line"><span>    ui(new Ui::ChatUserWid)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span>    SetItemType(ListItemType::CHAT_USER_ITEM);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ChatUserWid::~ChatUserWid()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    delete ui;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void ChatUserWid::SetInfo(QString name, QString head, QString msg)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    _name = name;</span></span>
<span class="line"><span>    _head = head;</span></span>
<span class="line"><span>    _msg = msg;</span></span>
<span class="line"><span>    // 加载图片</span></span>
<span class="line"><span>    QPixmap pixmap(_head);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图片自动缩放</span></span>
<span class="line"><span>    ui-&gt;icon_lb-&gt;setPixmap(pixmap.scaled(ui-&gt;icon_lb-&gt;size(), Qt::KeepAspectRatio, Qt::SmoothTransformation));</span></span>
<span class="line"><span>    ui-&gt;icon_lb-&gt;setScaledContents(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ui-&gt;user_name_lb-&gt;setText(_name);</span></span>
<span class="line"><span>    ui-&gt;user_chat_lb-&gt;setText(_msg);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ChatDialog里定义一些全局的变量用来做测试</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>std::vector&lt;QString&gt;  strs ={&quot;hello world !&quot;,</span></span>
<span class="line"><span>                             &quot;nice to meet u&quot;,</span></span>
<span class="line"><span>                             &quot;New year，new life&quot;,</span></span>
<span class="line"><span>                            &quot;You have to love yourself&quot;,</span></span>
<span class="line"><span>                            &quot;My love is written in the wind ever since the whole world is you&quot;};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>std::vector&lt;QString&gt; heads = {</span></span>
<span class="line"><span>    &quot;:/res/head_1.jpg&quot;,</span></span>
<span class="line"><span>    &quot;:/res/head_2.jpg&quot;,</span></span>
<span class="line"><span>    &quot;:/res/head_3.jpg&quot;,</span></span>
<span class="line"><span>    &quot;:/res/head_4.jpg&quot;,</span></span>
<span class="line"><span>    &quot;:/res/head_5.jpg&quot;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>std::vector&lt;QString&gt; names = {</span></span>
<span class="line"><span>    &quot;llfc&quot;,</span></span>
<span class="line"><span>    &quot;zack&quot;,</span></span>
<span class="line"><span>    &quot;golang&quot;,</span></span>
<span class="line"><span>    &quot;cpp&quot;,</span></span>
<span class="line"><span>    &quot;java&quot;,</span></span>
<span class="line"><span>    &quot;nodejs&quot;,</span></span>
<span class="line"><span>    &quot;python&quot;,</span></span>
<span class="line"><span>    &quot;rust&quot;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些数据只是测试数据，实际数据是后端传输过来的，目前只测试界面功能，用测试数据即可，写一个函数根据上面的数据添加13条item记录</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ChatDialog::addChatUserList()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 创建QListWidgetItem，并设置自定义的widget</span></span>
<span class="line"><span>    for(int i = 0; i &lt; 13; i++){</span></span>
<span class="line"><span>        int randomValue = QRandomGenerator::global()-&gt;bounded(100); // 生成0到99之间的随机整数</span></span>
<span class="line"><span>        int str_i = randomValue%strs.size();</span></span>
<span class="line"><span>        int head_i = randomValue%heads.size();</span></span>
<span class="line"><span>        int name_i = randomValue%names.size();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        auto *chat_user_wid = new ChatUserWid();</span></span>
<span class="line"><span>        chat_user_wid-&gt;SetInfo(names[name_i], heads[head_i], strs[str_i]);</span></span>
<span class="line"><span>        QListWidgetItem *item = new QListWidgetItem;</span></span>
<span class="line"><span>        //qDebug()&lt;&lt;&quot;chat_user_wid sizeHint is &quot; &lt;&lt; chat_user_wid-&gt;sizeHint();</span></span>
<span class="line"><span>        item-&gt;setSizeHint(chat_user_wid-&gt;sizeHint());</span></span>
<span class="line"><span>        ui-&gt;chat_user_list-&gt;addItem(item);</span></span>
<span class="line"><span>        ui-&gt;chat_user_list-&gt;setItemWidget(item, chat_user_wid);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ChatDialog构造函数中添加</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>addChatUserList();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完善界面效果，新增qss</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ChatUserWid {</span></span>
<span class="line"><span>    background-color:rgb(247,247,247);</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#user_chat_lb{</span></span>
<span class="line"><span>    color:rgb(153,153,153);</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    font-family: &quot;Microsoft YaHei&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#user_name_lb{</span></span>
<span class="line"><span>    color:rgb(0,0,0);</span></span>
<span class="line"><span>    font-size: 14px;</span></span>
<span class="line"><span>    font-weight: normal;</span></span>
<span class="line"><span>    font-family: &quot;Microsoft YaHei&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#time_wid #time_lb{</span></span>
<span class="line"><span>   color:rgb(140,140,140);</span></span>
<span class="line"><span>   font-size: 12px;</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QScrollBar:vertical {</span></span>
<span class="line"><span>    background: transparent; /* 将轨道背景设置为透明 */</span></span>
<span class="line"><span>    width: 8px; /* 滚动条宽度，根据需要调整 */</span></span>
<span class="line"><span>    margin: 0px; /* 移除滚动条与滑块之间的间距 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QScrollBar::handle:vertical {</span></span>
<span class="line"><span>    background: rgb(173,170,169); /* 滑块颜色 */</span></span>
<span class="line"><span>    min-height: 10px; /* 滑块最小高度，根据需要调整 */</span></span>
<span class="line"><span>    border-radius: 4px; /* 滑块边缘圆角，调整以形成椭圆形状 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {</span></span>
<span class="line"><span>    height: 0px; /* 移除上下按钮 */</span></span>
<span class="line"><span>    border: none; /* 移除边框 */</span></span>
<span class="line"><span>    background: transparent; /* 背景透明 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>QScrollBar::add-page:vertical, QScrollBar::sub-page:vertical {</span></span>
<span class="line"><span>    background: none; /* 页面滚动部分背景透明 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试效果" tabindex="-1"><a class="header-anchor" href="#测试效果"><span>测试效果</span></a></h2><figure><a href="./all_images/1717218961063.jpg"><img src="/assets/1717218961063-CQDYEB68.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h1 id="day-20-聊天列表动态加载" tabindex="-1"><a class="header-anchor" href="#day-20-聊天列表动态加载"><span>Day 20：聊天列表动态加载</span></a></h1><h2 id="聊天列表动态加载" tabindex="-1"><a class="header-anchor" href="#聊天列表动态加载"><span>聊天列表动态加载</span></a></h2><p>如果要动态加载聊天列表内容，可以在列表的滚动区域捕获鼠标滑轮事件，并且在滚动到底部的时候发送一个加载聊天用户的信号</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>bool ChatUserList::eventFilter(QObject *watched, QEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    // 检查事件是否是鼠标悬浮进入或离开</span></span>
<span class="line"><span>    if (watched == this-&gt;viewport()) {</span></span>
<span class="line"><span>        if (event-&gt;type() == QEvent::Enter) {</span></span>
<span class="line"><span>            // 鼠标悬浮，显示滚动条</span></span>
<span class="line"><span>            this-&gt;setVerticalScrollBarPolicy(Qt::ScrollBarAsNeeded);</span></span>
<span class="line"><span>        } else if (event-&gt;type() == QEvent::Leave) {</span></span>
<span class="line"><span>            // 鼠标离开，隐藏滚动条</span></span>
<span class="line"><span>            this-&gt;setVerticalScrollBarPolicy(Qt::ScrollBarAlwaysOff);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 检查事件是否是鼠标滚轮事件</span></span>
<span class="line"><span>    if (watched == this-&gt;viewport() &amp;&amp; event-&gt;type() == QEvent::Wheel) {</span></span>
<span class="line"><span>        QWheelEvent *wheelEvent = static_cast&lt;QWheelEvent*&gt;(event);</span></span>
<span class="line"><span>        int numDegrees = wheelEvent-&gt;angleDelta().y() / 8;</span></span>
<span class="line"><span>        int numSteps = numDegrees / 15; // 计算滚动步数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 设置滚动幅度</span></span>
<span class="line"><span>        this-&gt;verticalScrollBar()-&gt;setValue(this-&gt;verticalScrollBar()-&gt;value() - numSteps);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 检查是否滚动到底部</span></span>
<span class="line"><span>        QScrollBar *scrollBar = this-&gt;verticalScrollBar();</span></span>
<span class="line"><span>        int maxScrollValue = scrollBar-&gt;maximum();</span></span>
<span class="line"><span>        int currentValue = scrollBar-&gt;value();</span></span>
<span class="line"><span>        //int pageSize = 10; // 每页加载的联系人数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (maxScrollValue - currentValue &lt;= 0) {</span></span>
<span class="line"><span>            // 滚动到底部，加载新的联系人</span></span>
<span class="line"><span>            qDebug()&lt;&lt;&quot;load more chat user&quot;;</span></span>
<span class="line"><span>            //发送信号通知聊天界面加载更多聊天内容</span></span>
<span class="line"><span>            emit sig_loading_chat_user();</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return true; // 停止事件传递</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return QListWidget::eventFilter(watched, event);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回到ChatDialog类里添加槽函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ChatDialog::slot_loading_chat_user()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if(_b_loading){</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _b_loading = true;</span></span>
<span class="line"><span>    LoadingDlg *loadingDialog = new LoadingDlg(this);</span></span>
<span class="line"><span>    loadingDialog-&gt;setModal(true);</span></span>
<span class="line"><span>    loadingDialog-&gt;show();</span></span>
<span class="line"><span>    qDebug() &lt;&lt; &quot;add new data to list.....&quot;;</span></span>
<span class="line"><span>    addChatUserList();</span></span>
<span class="line"><span>    // 加载完成后关闭对话框</span></span>
<span class="line"><span>    loadingDialog-&gt;deleteLater();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    _b_loading = false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>槽函数中添加了LoadingDlg类，这个类也是个QT 设计师界面类，ui如下</p><figure><a href="./all_images/1717637779912.jpg"><img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAABmCAYAAACeC8f1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAs3SURBVHhe7dvNax7HAcfxnErp/9BDc2z8ltQvTV9sS05BdizJAaekJU1sWZKxjRoSSgzRY2jB6qGYOo9IfGjBIj3owdSHmkJskKhjesihlD5QShNCemtObWL6D0x3dmf3mZmd3Z3dZ5/n0Sjfwwe0bzM7szO/nX2wnzg+NS0AIBSEFoCgEFoAgkJoAQjKE/v2HxB1fOWrXxOLS0uA05tXr4qzL77oPAa0oVFozZ95AXCSg+rEieecx4A2NAytM4BTElonnMeANhBaaBWhhVFrFFpz82cApwuLS2I6Ci3XMaANhBZaRWhh1BqG1ry35fVt0bvmOHZxXWz3e6Jj70fQLiwuqtDS9l/riX5/W6xfTLY7vcHfc/PXRE87BlQZKrRkIPX7fU0+hNyhdVGsb+vXFV+PsDhDKxKPle11sRz9PQgtGVh9sb1+TSwTWvDU4korGoDRoOzkgkxRAzYJLPvNmoSYc0WGoBSFls5caQH1NAqt2bm5RKcnttaXk7+X18VWrzM4pizJlVYn3V4WXecKyxatuKxyEIaFCxfE1PR0tt3puZ6vWzaWgBLDhVZEvjW7y9HfaYDJ8IpWVUvquB5a8tyelIVYxDo/CTZCK1R2aA104k9BOUayIHO85IAqjULr9OysRg7GXhRG0eddJ9m32N0SW92l7O90f7ptv2HzemJVnY+wnF9YEMenptT2kuhu5Z9pNiaiF53x3KMQ08sCXFoIrUg8+PSgkYN1S3SX8qGVWeqKLWdAyf9fpG8jJGZoua32krHhOgZUaSW00tWTK5z00FrVf9/Y6kbhlAaXTq7SeOOGqnilVS1dnQNlhg+tOHjkain5TLQ/6+yVVhpwMRlc6SdC9GkgQ825KkMwKlda8nlHq/BkzDiOAxUahdbzp2eVjtiMVkZvL6rt1V78thwcT0Jqc3Xwd3J8SbydvoGjsIrLkQGm9qfnIzznzi+IY8en8seisZG9qOJ9cuzIMdATb9nnAiWGCq23opWRM2AW9c++waCU5yf7ZNClgzahh118Xja4ERIztLSXU+Hz1MYBzxwehlxpAabClRbQEkILrSK0MGqEFlpFaGHUmoXW86cBp3Pnzotjx447jwFtaBRaJ0+dApxeefVVcfToUecxoA2NQusbTz4JABPRKLRc+wFgHAgtAEEhtAAEhdACEJRgQuvpI8fFked+XIu8xlUWgHAFE1oyhP7yuRDv/9vP7Q8/EYdP/Ejs3bffWd7OMC+u3++L/saVbN+ljWj7/pqYNc4bv51yHz7q3mtIbUNeUKH14DMhbv3Tz8qtu+LQ1EviqT17neWlZtceiH5/Q1xyHBs9O7TU9ogmVNLWqHzDA3F9Ln/uyCb25Y3cPdxfm8+d53+v9fuM0ApbMKF1eOqsuHrr9+KFSx0vMy+viGe+Px9YaI1W3FZ7ss6tifsyEKx7aH9iq7bmgueKuC3rt+qqc691EVphaz20vvPd74mFhQuV5Hmu64vs/9a3xYEj02LvwWNiz8GjXr6595nKz8MvfWjFkuDQVzxtT+zyflbBpfVDnXuti9AK20hWWjKU3nn33ULyuOu6MgePzos3frkhfnrdz6Wf/za6Zs5Zls4rtNI3vOb2Zfu8dCWRcpRpfxptrOVCy5xQg1BL7lNd51H2/bUrubKLgyDfD86J7VGHW3XQ2PUPd6/lz8LZNq9nHGncB2jLyD4Pi4KrSWBJ8jet/hdCbH3m550//lkcnpY/xO9zlpeyJ0COGqTGAFYDXJ+Es2sb2mePmjT6xHCUE08eOfirQsuoq2BV4lF2WRAkbRp8utkT27cOJ6tsJ+uc4e61/FnY5/s/4yH6AK0Z6W9adnA1DSxJhtbDT/8rfvPBP7y88atbLfwQX7xCKL8uEk+E9HhROYOVVLrPnFCO8IuYdfuXXR0Egwlp3od/HU5xX/iE1qD+5vfqYDwL37Y172eM1sh/iE+Da5jAkuTn4Ss/+7U49ZM3vfzgh6+Jfc/OiD17h1hpWZPD4JiI2Vs3o8otLMcztKwJYdxzjbKrg6Bg9VKjDierbCfrnMb3qhQ+C/v8wrZF9Gc8bB+gNSMPLWnm5Enn/jqa/BC/58AhZ1m6dkIreQsb5ehv9xoDflKhZfdDq6FVsppJ2fU3vteqZ2Gf7/uMh+4DtGUsodUG+U8e/vDB38TdP/l57/0P42tcZensCWDy/HQwAsxxvLAcNcGGCa0aZcfXOYMgX4YrCHzqKBKXV6OfG99r5bPwbVvzfsZoBRNa8jetf/1PiL/+x8/N9+6KQ9MvDfd5GEmOW2/YeGJo++xt9VbOTRRrMiX7zAFvTiif0PIvO77ODgJ173Yd5n3411FMtSXX12rSW/fV+F59n4VWttczjgzfB2hDUKH16O+fiO7v7np5bfUXNX6IVwNPpw/CdLJkzIGbK0dOiPgac4JmA1y5fTkfSuaE8gut7LqKst1ttUNEK88KDZ86qhT1t72CGeZeq56Fq20+z1hqow8wnGBCS/7nZ/l/CWUQ+Xrq6Wcr/8nD7jWOydROHWnIuD7Rdj5Ca9yCCS1J/ut2uXLy9eUNrEjZD8xtabGOwQrGvZrascbRzzAEFVpwkysVc5Xi/p1oGOOoY6ejD3YGQmuXsH9rGcXnyjjq2Onog8kjtAAEpVFoff3sywAwEYQWgKAQWgCCQmgBCAqhpVl5+Fg8/uiOmHEca99VcfOjqL6H3WzfeOsfsOud1H20qc027Ib+2E0ILc14B6cdWmp7ApNjrKF145F4/DgqX9PfvJo7b2bz4+jYI7Fi7fdFaO1ehJZmsqE1OeMJLdXexx+Lm6/r+7vingwvqz5CC0UILQ2h5d5uQ3kIqeDS+oLQQhFCS+McnK/fEX3tU0a6d0M7HktXESnHZLM/ix7eyYWWWf8g1JIJrK7zKLu/2a0ViHa7s2277Y0DNgkl12dgyg6p6tAq7/NabbDPscaAc1xgYggtTW5wqjAwQkoNcH0Czmw+0j551GSqKCeuS06QqtAy6ipakVSXXcZud3a93gZHu73F19qfhRbrnKrQqupz7zbEz0a/t4Ky9HIwUYSWxhycxauDylVAPBHS40XlqMlRFVrWZDHr9i+7jD0pkwmfb1/16qdALhgcVKCk4Vu7LqPPfduQ9FNu5WwFqN0/mCxCS2MMTmsSGRyTMJkkOjUxCsvxDC0reIxJV6PsMvakLJykPuHjYoWAk3WOT2gV9nl6rKoNqv/MMgbSfi0sCxNBaGmMwVkYCBFj8qpPNn2C6W/9GsFiTo5dFFolq9aUHVLloVXR5xGvNpQ9Y01hWZgIQktjDs7iiWZMKMdENidcUTlq4g0TWjXKLmNPynhbDwR9f8PJW1RmIt+O0tCq7HPfNhT1n2mYdqN9hJbGHpzJRLDexPGE0fbZ29knhz2BzEmW7IsMFVr+ZZcx6y243m5nbao9uSBRAWuFQnVo+fR5dRucz1iWV/hcMGmElsY5ONVAHzADQkoHfkxeH19jTrhsEin3buRDyazfL7Sy6yrKLmO3O91e0dsVl5u/ti6jrzT2aqfovLRNVX1epw25urS+kOz+wWQRWrtSvdCatDQ0qj7TAInQ2o08f2DeSQarxYJPQkAhtAInVynmCsX9GxGwWxBau8BglaIYn4UqxFwINgSoUWi59gPAOBBaAIJCaAEICqEFICiEFoCgEFoAgkJoAQgKoQUgKIQWgKAQWgCCQmgBCAqhBSAohBaAoBBaAIJCaAEICqEFICiEFoCgEFoAgkJoAQgKoQUgKIQWgKAQWgCCQmgBCAqhBSAohBaAoBBaAIJCaAEICqEFICiEFoCgEFoAgkJoAQgKoQUgKIQWgIAcEP8HUDEHdjfuiZ4AAAAASUVORK5CYII=" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><h2 id="添加stackwidget管理界面" tabindex="-1"><a class="header-anchor" href="#添加stackwidget管理界面"><span>添加stackwidget管理界面</span></a></h2><p>ChatDialog界面里添加stackedWidget，然后添加两个页面</p><figure><a href="./all_images/1717639561119.jpg"><img src="/assets/1717639561119-DXeMLElC.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>回头将这两个界面升级为自定义的界面</p><p>先添加一个自定义的QT设计师界面类ChatPage,然后将原来放在ChatDialog.ui中的chat_data_wid这个widget移动到ChatPage中ui布局</p><p>布局属性如下</p><figure><a href="./all_images/1717640426705.jpg"><img src="/assets/1717640426705-BXnLvDC2.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>然后将ChatDialog.ui中的chat_page 升级为ChatPage。</p><p>接着将ChatPage中的一些控件比如emo_lb, file_lb升级为ClickedLabel, receive_btn, send_btn升级为ClickedBtn</p><p>如下图：</p><figure><a href="./all_images/1717644080174.jpg"><img src="/assets/1717644080174-DBGiv7iN.jpg" alt="配图" tabindex="0" loading="lazy"></a><figcaption>配图</figcaption></figure><p>然后在ChatPage的构造函数中添加按钮样式的编写</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ChatPage::ChatPage(QWidget *parent) :</span></span>
<span class="line"><span>    QWidget(parent),</span></span>
<span class="line"><span>    ui(new Ui::ChatPage)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ui-&gt;setupUi(this);</span></span>
<span class="line"><span>    //设置按钮样式</span></span>
<span class="line"><span>    ui-&gt;receive_btn-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;);</span></span>
<span class="line"><span>    ui-&gt;send_btn-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置图标样式</span></span>
<span class="line"><span>    ui-&gt;emo_lb-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;,&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;);</span></span>
<span class="line"><span>    ui-&gt;file_lb-&gt;SetState(&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;,&quot;normal&quot;,&quot;hover&quot;,&quot;press&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为继承了QWidget,想实现样式更新，需要重写paintEvent</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ChatPage::paintEvent(QPaintEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    QStyleOption opt;</span></span>
<span class="line"><span>    opt.init(this);</span></span>
<span class="line"><span>    QPainter p(this);</span></span>
<span class="line"><span>    style()-&gt;drawPrimitive(QStyle::PE_Widget, &amp;opt, &amp;p, this);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的，的ListItemBase</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ListItemBase::paintEvent(QPaintEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    QStyleOption opt;</span></span>
<span class="line"><span>    opt.init(this);</span></span>
<span class="line"><span>    QPainter p(this);</span></span>
<span class="line"><span>    style()-&gt;drawPrimitive(QStyle::PE_Widget, &amp;opt, &amp;p, this);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clickedlabel完善" tabindex="-1"><a class="header-anchor" href="#clickedlabel完善"><span>ClickedLabel完善</span></a></h2><p>希望ClickedLabel在按下的时候显示按下状态的资源，在抬起的时候显示抬起的资源，所以修改按下事件和抬起事件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ClickedLabel::mousePressEvent(QMouseEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (event-&gt;button() == Qt::LeftButton) {</span></span>
<span class="line"><span>        if(_curstate == ClickLbState::Normal){</span></span>
<span class="line"><span>              qDebug()&lt;&lt;&quot;clicked , change to selected hover: &quot;&lt;&lt; _selected_hover;</span></span>
<span class="line"><span>            _curstate = ClickLbState::Selected;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_selected_press);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>               qDebug()&lt;&lt;&quot;clicked , change to normal hover: &quot;&lt;&lt; _normal_hover;</span></span>
<span class="line"><span>            _curstate = ClickLbState::Normal;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_normal_press);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 调用基类的mousePressEvent以保证正常的事件处理</span></span>
<span class="line"><span>    QLabel::mousePressEvent(event);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抬起事件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>void ClickedLabel::mouseReleaseEvent(QMouseEvent *event)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (event-&gt;button() == Qt::LeftButton) {</span></span>
<span class="line"><span>        if(_curstate == ClickLbState::Normal){</span></span>
<span class="line"><span>             // qDebug()&lt;&lt;&quot;ReleaseEvent , change to normal hover: &quot;&lt;&lt; _normal_hover;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_normal_hover);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>             //  qDebug()&lt;&lt;&quot;ReleaseEvent , change to select hover: &quot;&lt;&lt; _selected_hover;</span></span>
<span class="line"><span>            setProperty(&quot;state&quot;,_selected_hover);</span></span>
<span class="line"><span>            repolish(this);</span></span>
<span class="line"><span>            update();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        emit clicked();</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 调用基类的mousePressEvent以保证正常的事件处理</span></span>
<span class="line"><span>    QLabel::mousePressEvent(event);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="qss美化" tabindex="-1"><a class="header-anchor" href="#qss美化"><span>qss美化</span></a></h2><p>添加qss美化一下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>LoadingDlg{</span></span>
<span class="line"><span>    background: #f2eada;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#title_lb{</span></span>
<span class="line"><span>    font-family: &quot;Microsoft YaHei&quot;;</span></span>
<span class="line"><span>    font-size: 18px;</span></span>
<span class="line"><span>    font-weight: normal;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#chatEdit{</span></span>
<span class="line"><span>    background: #ffffff;</span></span>
<span class="line"><span>    border: none; /* 隐藏边框 */</span></span>
<span class="line"><span>    font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>    font-size: 18px; /* 设置字体大小 */</span></span>
<span class="line"><span>    padding: 5px; /* 设置内边距 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#send_wid{</span></span>
<span class="line"><span>    background: #ffffff;</span></span>
<span class="line"><span>    border: none; /* 隐藏边框 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#add_btn[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_normal.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#add_btn[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_hover.png);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#add_btn[state=&#39;press&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/add_friend_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#receive_btn[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>   background: #f0f0f0;</span></span>
<span class="line"><span>   color: #2cb46e;</span></span>
<span class="line"><span>   font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>   border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#receive_btn[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>   background: #d2d2d2;</span></span>
<span class="line"><span>   color: #2cb46e;</span></span>
<span class="line"><span>   font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>   border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#receive_btn[state=&#39;press&#39;]{</span></span>
<span class="line"><span>   background: #c6c6c6;</span></span>
<span class="line"><span>   color: #2cb46e;</span></span>
<span class="line"><span>   font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>   border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#send_btn[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>    background: #f0f0f0;</span></span>
<span class="line"><span>    color: #2cb46e;</span></span>
<span class="line"><span>    font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>    font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>    border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#send_btn[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>   background: #d2d2d2;</span></span>
<span class="line"><span>   color: #2cb46e;</span></span>
<span class="line"><span>   font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>   border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#send_btn[state=&#39;press&#39;]{</span></span>
<span class="line"><span>   background: #c6c6c6;</span></span>
<span class="line"><span>   color: #2cb46e;</span></span>
<span class="line"><span>   font-size: 16px; /* 设置字体大小 */</span></span>
<span class="line"><span>   font-family: &quot;Microsoft YaHei&quot;; /* 设置字体 */</span></span>
<span class="line"><span>   border-radius: 20px; /* 设置圆角 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#tool_wid{</span></span>
<span class="line"><span>    background: #ffffff;</span></span>
<span class="line"><span>    border-bottom: 0.5px solid #ececec; /* 设置下边框颜色和宽度 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#emo_lb[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/smile.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#emo_lb[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/smile_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#emo_lb[state=&#39;press&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/smile_press.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#file_lb[state=&#39;normal&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/filedir.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#file_lb[state=&#39;hover&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/filedir_hover.png);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#file_lb[state=&#39;press&#39;]{</span></span>
<span class="line"><span>    border-image: url(:/res/filedir_press.png);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,895)])}var d=s(l,[[`render`,u]]);export{c as _pageData,d as default};