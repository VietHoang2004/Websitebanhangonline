namespace WebBanHangOnline.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateOrderDetial : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.tb_Order", "OrderId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.tb_Order", "OrderId", c => c.Int(nullable: false));
        }
    }
}
