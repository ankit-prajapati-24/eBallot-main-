
class Solution
{
public:
    int miniOperations(string num)
    {
        int n = num.length();
        int cnt = 0, mini = n;

        if (n == 1) return 1;
        if (n == 1 && num == "0")return 0;

        for (int i = n - 1; i >= 0; i--)
        {
            if (num[i] != '0' && num[i] != '5')
            {
                cnt++;
                continue;
            }
            int count = cnt;
            for (int j = i - 1; j >= 0; j--)
            {
                int x = ((num[j] - '0') * 10) + (num[i] - '0');
                if (x % 25 == 0 || x == 0)
                {
                    mini = min(mini, count);
                    break;
                }
                else
                    count++;
            }
            cnt++;
        }
        int a = count(num.begin(), num.end(), '0');
        if (n == 2 && num[0] != '5' && a == n - 1)
            return 1;
        if (mini == n)
        {
            return n - a;
        }
        return mini;
    }
};