package com.xuexue.web.servlet; /**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: ${PACKAGE_NAME}
 * @ClassName: ${NAME}
 * @Author: XueXue-Li
 * @Description: ${description}
 * @Date: 2021/7/10 17:56
 * @Version: 1.0
 */

import com.sample.RollShowone;
import com.xuexue.domain.RollShowAll;
import com.xuexue.service.loadAllDataService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "load", value = "/load/*")
public class Load extends BaseServlet {

    /**
     * 页面一加载就执行该方法查询所有的roll_showOne
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void loadAllDataServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        loadAllDataService load = new loadAllDataService();
        List<RollShowAll> list = load.load();
        writeValue(list,response);
    }

    protected void loadOneDataServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String parameter = request.getParameter("tag");
        loadAllDataService load = new loadAllDataService();
        RollShowone one = load.queryForOne(parameter);
        writeValue(one,response);
    }

}
