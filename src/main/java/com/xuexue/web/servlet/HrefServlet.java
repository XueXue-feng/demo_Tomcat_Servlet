package com.xuexue.web.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.web.servlet
 * @ClassName: HrefServlet
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/12 9:29
 * @Version: 1.0
 */
@WebServlet("/hrefServlet")
public class HrefServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String parameter = req.getParameter("indexId");
        String tag = req.getParameter("tag");
        if(parameter.equalsIgnoreCase("1")){
            resp.sendRedirect(req.getContextPath() + "/index.html");
        }
        if(parameter.equalsIgnoreCase("2")){
            resp.sendRedirect(req.getContextPath() + "/index2.html");
        }
        if(parameter.equalsIgnoreCase("3")){
            resp.sendRedirect(req.getContextPath() + "/index3.html");
        }
        if(parameter.equalsIgnoreCase("4")){
            resp.sendRedirect(req.getContextPath() + "/index4.html");
        }
        if(parameter.equalsIgnoreCase("5")){
            resp.sendRedirect(req.getContextPath() + "/smithy.html?tag=" + tag);
        }
        if(parameter.equalsIgnoreCase("6")){
            resp.sendRedirect(req.getContextPath() + "/about.html");
        }
        if(parameter.equalsIgnoreCase("7")){
            resp.sendRedirect(req.getContextPath() + "/contact.html");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
