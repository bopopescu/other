﻿#-*- coding:utf-8 -*-
kind1={u'北京':0,u'天津':0,u'上海':0,u'重庆':0,u'河北':0,u'河南':0,u'云南':0,u'辽宁':0,u'黑龙江':0,u'湖南':0,u'安徽':0, u'山东':0,u'新疆':0,u'江苏':0,u'浙江':0,u'江西':0,u'湖北':0, u'广西':0,u'甘肃':0,u'山西':0, u'内蒙古':0,u'陕西':0,u'吉林':0,u'福建':0,u'贵州':0,u'广东':0,u'青海':0,u'西藏':0,u'四川':0,u'宁夏':0,u'海南':0, u'台湾':0,u'香港':0,u'澳门':0}
print [{'name':key.encode('utf-8'),'value':value} for key,value in kind1.items()]