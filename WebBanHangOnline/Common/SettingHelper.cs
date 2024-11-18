using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebBanHangOnline.Models;

namespace WebBanHangOnline.Common
{
    public class SettingHelper
    {
        public static string GetValue(string key)
        {
            using (var db = new ApplicationDbContext()) // Tạo một instance mới cho mỗi lần gọi
            {
                var item = db.SystemSettings.SingleOrDefault(x => x.SettingKey == key);
                if (item != null)
                {
                    return item.SettingValue;
                }
            }
            return ""; // Trả về chuỗi rỗng nếu không tìm thấy
        }
    }
}