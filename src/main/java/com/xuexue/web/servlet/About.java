package com.xuexue.web.servlet; /**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: ${PACKAGE_NAME}
 * @ClassName: ${NAME}
 * @Author: XueXue-Li
 * @Description: ${description}
 * @Date: 2021/7/11 10:06
 * @Version: 1.0
 */

import com.xuexue.service.CilentService;
import com.xuexue.service.MemberService;
import com.xuexue.service.Service;
import com.xuexue.service.introduceService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "About", value = "/about/*")
public class About extends BaseServlet {

    protected void introduceServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        introduceService service = new introduceService();
        com.sample.RollCompanyintroduce introduce = service.queryForIntroduce();
        writeValue(introduce,response);
    }

    protected void serviceServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Service service = new Service();
        List<com.sample.RollCompanyService> list= service.queryForService();
        writeValue(list,response);
    }

    protected void memberServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        MemberService service = new MemberService();
        List<com.sample.RollCompanymembers> list= service.queryForMembers();
        writeValue(list,response);
    }

    protected void clientServlet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        CilentService service = new CilentService();
        List<com.sample.RollClients> list= service.queryForClient();
        writeValue(list,response);
    }


}
