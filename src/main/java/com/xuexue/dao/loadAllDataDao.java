package com.xuexue.dao;

import com.sample.RollShowone;
import com.xuexue.domain.RollShowAll;
import com.xuexue.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/**
 * @ProjectName: demo_Tomcat_Servlet
 * @Package: com.xuexue.dao
 * @ClassName: loadAllDataDao
 * @Author: XueXue-Li
 * @Description:
 * @Date: 2021/7/10 18:13
 * @Version: 1.0
 */
public class loadAllDataDao {
    private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDataSource());

    public List<RollShowAll> queryAll() {
        String sql = "select tag,main_image,tag_discribe from roll_showOne";
        List<RollShowAll> query = template.query(sql, new BeanPropertyRowMapper<RollShowAll>(RollShowAll.class));
        return query;
    }

    public RollShowone queryForOne(String tag_discribe){
        String sql = "select * from roll_showone where tag = ?";
        RollShowone query = template.queryForObject(sql, new BeanPropertyRowMapper<RollShowone>(RollShowone.class), tag_discribe);
        return query;
    }
}
