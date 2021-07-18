package com.xuexue.web.filter; /**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: ${PACKAGE_NAME}
 * @ClassName: ${NAME}
 * @Author: XueXue-Li
 * @Description: ${description}
 * @Date: 2021/7/10 17:41
 * @Version: 1.0
 */

import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//处理乱码问题会拦截所有的请求
@WebFilter("/*")
public class EncodingFilter implements Filter {
    public void init(FilterConfig config) throws ServletException {
    }

    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        //将父接口转为子接口
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;

        //解决get和post请求中文数据乱码问题
        req.setCharacterEncoding("utf-8");

        //处理响应乱码
        resp.setContentType("text/html;charset=utf-8");
        chain.doFilter(req,resp);
    }
}
