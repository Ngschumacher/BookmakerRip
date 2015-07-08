using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookmakerRip
{
    class StringEqualityComparer :IEqualityComparer<string>
    {

        public bool Equals(string x, string y)
        {
            bool equal = x.Equals(y);
            return equal;
        }

        public int GetHashCode(string obj)
        {
            int hashCode = obj.GetHashCode();
            return hashCode;
        }
    }
}